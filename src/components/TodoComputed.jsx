/* eslint-disable react/prop-types */
const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="flex justify-between py-4 px-4 bg-white rounded-b-md dark:bg-gray-800">
            <span className="text-gray-400"> {computedItemsLeft} {computedItemsLeft > 1 ? 'Tasks' : 'Task'} left</span>
            <button onClick={() => clearCompleted()} className="dark:text-gray-400">Clear Completed</button>
        </section>
    )
}
export default TodoComputed;