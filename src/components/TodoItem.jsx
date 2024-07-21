/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import CrossIcon from "../assets/icons/CrossIcon";
import IconCheck from "../assets/icons/IconCheck";
import editIcon from "../assets/icons/edit.png";
import tickicon from "../assets/icons/check.png";
import cross from "../assets/icons/close.png"

const TodoItem = React.forwardRef(({ todo, removeTodo, updateTodo, startEditing, editingTodoId, editingTitle, handleEditChange, saveEdit, cancelEdit, ...props }, ref) => {
    const { id, title, completed } = todo;

    return (
        <article {...props} ref={ref} className="flex gap-4 py-4 border-b-gray-500 dark:bg-gray-800">
            {editingTodoId === id ? (
                <>
                    <input
                        type="text"
                        value={editingTitle}
                        onChange={handleEditChange}
                        style={{
                            border: 'none',
                            background: 'transparent',
                            outline: 'none',
                            width: '100%'
                        }}
                        className="grow text-gray-600 dark:text-gray-200 dark:bg-gray-800 "
                    /> 
                    <button onClick={() => saveEdit(id)} > <img src={tickicon} alt="tick" width={18} height={19} style={{ marginRight: '2px' }} /> </button>
                    <button onClick={cancelEdit} ><img src={cross} alt="close" width={18} height={19} style={{ marginRight: '2px' }} /> </button>
                </>
            ) : (
                <>
                    <button onClick={() => { updateTodo(id) }} className={`rounded-full border-2 w-5 h-5 ${completed ? 'flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : ''}`}>
                        {completed && <IconCheck />}
                    </button>
                    <p className={`grow text-gray-600 dark:text-gray-200 ${completed && 'line-through'}`}>{title}</p>
                    <div className="flex items-center gap-2">
                        <button onClick={() => startEditing(id, title)}>  <img src={editIcon} alt="Edit" width={18} height={19} style={{ marginRight: '2px' }} /> </button>

                        <button onClick={() => removeTodo(id)}><CrossIcon /></button>
                    </div>
                </>
            )}
        </article>
    );
});
export default TodoItem;
