/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoSearch = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <form onChange={handleChange} className="bg-white rounded-md overflow-hidden py-4 flex gap-2 items-center px-4 my-5 dark:bg-gray-800 lg:mt-[120px] lg:mb-7">
            <input
                value={query}
                type="text"
                className="w-full text-gray-400 outline-none dark:bg-gray-800"
                placeholder="Search Todos"
                onChange={handleChange}
                onSubmit={(e) => e.preventDefault()}
            />
        </form>
    );
};

export default TodoSearch;
