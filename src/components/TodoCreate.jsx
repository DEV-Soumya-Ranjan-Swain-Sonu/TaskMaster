/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoCreate = ({ createTodo, initialTitle = "" }) => {
    const [title, setTitle] = useState(initialTitle);

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        if (title.trim().length == 0) {
            return setTitle("");
        }
        createTodo(title);
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmitAddTodo} className="bg-white rounded-md overflow-hidden py-4 flex gap-2 items-center px-4 my-5 dark:bg-gray-800 lg:mt-[120px] lg:mb-7">
            <input
                value={title}
                type="text"
                className="w-full text-gray-400 outline-none dark:bg-gray-800"
                placeholder="Enter a new todo"
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    )
}
export default TodoCreate;
