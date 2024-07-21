/* eslint-disable react/prop-types */
const TodoFilter = ({changeFilter, filter}) => {
    return (
        <section className="container mx-auto mt-6">
            <div className="bg-white p-4 rounded-md flex justify-center gap-4 dark:bg-gray-800">
              <button onClick={() => changeFilter('all')} className={`${filter == 'all' && 'text-blue-600 dark:text-blue-500'} hover:text-blue-600 dark:text-gray-400`}>All</button>
              <button onClick={() => changeFilter('active')} className={`${filter == 'active' && 'text-blue-600 dark:text-blue-500'} hover:text-blue-600 dark:text-gray-400`}>Active</button>
              <button onClick={() => changeFilter('completed')} className={`${filter == 'completed' && 'text-blue-600 dark:text-blue-500'} hover:text-blue-600 dark:text-gray-400`}>Completed</button>
            </div>
        </section>
    )
}
export default TodoFilter;