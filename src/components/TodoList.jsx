/* eslint-disable react/prop-types */
import {Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";
const TodoList = ({ todos, removeTodo, updateTodo, startEditing, editingTodoId, editingTitle, handleEditChange, saveEdit, cancelEdit }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvider) => (
                <div className="bg-white rounded-t-md px-4 dark:bg-gray-800"
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                >
                    {todos.map((todo, index) => {
                        return (
                            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                                {(draggableProvider) => (
                                    <TodoItem
                                        ref={draggableProvider.innerRef}
                                        {...draggableProvider.draggableProps}
                                        {...draggableProvider.dragHandleProps}
                                        todo={todo}
                                        removeTodo={removeTodo}
                                        updateTodo={updateTodo}
                                        startEditing={startEditing}
                                        editingTodoId={editingTodoId}
                                        editingTitle={editingTitle}
                                        handleEditChange={handleEditChange}
                                        saveEdit={saveEdit}
                                        cancelEdit={cancelEdit}
                                    />
                                )}
                            </Draggable>
                        )
                    })}
                    {droppableProvider.placeholder}
                </div>
            )}
        </Droppable>
    )
}
export default TodoList;
