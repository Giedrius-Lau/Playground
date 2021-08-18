import React from 'react';
import ButtonCheck from '../ButtonCheck';

const TodoListItems = ({ list, completedTodo, removeTodo } = props) => {
    return (
        <ul className='mt-4'>
            {list.map((todo, index) => {
                return (
                    <li
                        key={index}
                        className={`${
                            todo.completed ? 'line-through' : ''
                        } border-gray-400  justify-between  mb-2 transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4`}
                    >
                        <div className='text-lg'>{todo.name}</div>
                        <p>{todo.completed}</p>

                        <ButtonCheck todo={todo} index={index} completedTodo={completedTodo} />

                        <button className='px-4 py-2 bg-red-600  rounded-md shadow-md ml-4 text-white' onClick={() => removeTodo(index)}>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' viewBox='0 0 20 20' fill='currentColor'>
                                <path
                                    fillRule='evenodd'
                                    d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default TodoListItems;
