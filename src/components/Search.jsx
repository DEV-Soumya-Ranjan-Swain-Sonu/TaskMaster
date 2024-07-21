/* eslint-disable no-unused-vars */
import { DragDropContext } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import Header from "./Header";
import TodoComputed from "./TodoComputed";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";

const initialStateTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

function Search() {
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); 

  const startEditing = (id, currentTitle) => {
    setEditingTodoId(id);
    setEditingTitle(currentTitle);
  };

  const handleEditChange = (e) => {
    setEditingTitle(e.target.value);
  };

  const saveEdit = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, title: editingTitle } : todo));
    setEditingTodoId(null);
    setEditingTitle("");
  };

  const cancelEdit = () => {
    setEditingTodoId(null);
    setEditingTitle("");
  };

  const [todos, setTodos] = useState(initialStateTodos);
  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const filterTodos = () => {
    let filteredTodos = todos;
    switch (filter) {
      case 'all':
        filteredTodos = todos;
        break;
      case 'active':
        filteredTodos = todos.filter(todo => !todo.completed);
        break;
      case 'completed':
        filteredTodos = todos.filter(todo => todo.completed);
        break;
      default:
        filteredTodos = todos;
    }
    return filteredTodos.filter(todo => todo.title.toLowerCase().includes(searchQuery.toLowerCase())); // Filter by search query
  };

  const changeFilter = (filter) => setFilter(filter);

  const computedItemsLeft = todos.filter(todo => !todo.completed).length;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (source.index === destination.index && source.droppableId === destination.droppableId)
      return;
    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:bg-gray-900 bg-no-repeat width bg-contain bg-gray-300 min-h-screen md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      <Header />
      <main className="container mx-auto px-4 md:max-w-xl md:shadow-2xl">
        <TodoSearch onSearch={handleSearch} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={filterTodos()}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            startEditing={startEditing}
            editingTodoId={editingTodoId}
            editingTitle={editingTitle}
            handleEditChange={handleEditChange}
            saveEdit={saveEdit}
            cancelEdit={cancelEdit}
          />
        </DragDropContext>
        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />
        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>
    </div>
  );
}

export default Search;
