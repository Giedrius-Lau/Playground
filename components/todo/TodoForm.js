import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <form className='flex w-full mt-10 bg-gray-200 p-4 rounded-md' onSubmit={props.handleSubmit}>
                <input
                    className='focus:border-deep-purple-300 border-2 w-full rounded-md mr-4 pl-2'
                    type='text'
                    name='todoInput'
                    placeholder='Enter todo'
                ></input>
                <button className='ml-auto px-4 py-2 text-gray-800 bg-yellow-300  rounded-md' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default TodoForm;
