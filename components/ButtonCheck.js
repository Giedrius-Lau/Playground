import React from 'react';

const ButtonCheck = ({ todo, index, completedTodo, ...props } = props) => {
    return (
        <button onClick={() => completedTodo(index)} className={`${todo.completed ? 'bg-green-300' : ''} ml-auto px-4 py-2 text-white bg-gray-300  rounded-md`}>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                />
            </svg>
        </button>
    );
};

export default ButtonCheck;
