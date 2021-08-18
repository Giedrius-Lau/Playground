import React from 'react';
import useLocalStorage from '../utilities/useStateToLocalStorage';
import addToLocalStorage from '../utilities/addItemToLocalStorage';
import TodoForm from '../components/todo/TodoForm';
import TodoListItems from '../components/todo/TodoListItems';

import Header from '../components/Header';
import Footer from '../components/Footer';

const TodoList = () => {
    const [list, setList] = useLocalStorage('todoList', []);

    const removeTodo = (index) => {
        const todoList = [...list];
        todoList.splice(index, 1);
        setList(todoList);
    };

    const completedTodo = (index) => {
        const todoList = [...list];
        todoList[index].completed = !todoList[index].completed;
        setList(todoList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let inputValue = e.target.todoInput.value;

        if (inputValue) {
            let todo = { name: inputValue, completed: false };
            addToLocalStorage('todoList', todo);
            setList(JSON.parse(localStorage.getItem('todoList')));
            e.target.todoInput.value = '';
        }
    };

    return (
        <>
            <Header></Header>
            <div className='max-w-md mx-auto'>
                <h1 className='uppercase text-center text-4xl font-extrabold mt-6 text-cyan-accent-700'>To do list</h1>
                <TodoForm handleSubmit={handleSubmit}></TodoForm>
                {list && <TodoListItems list={list} removeTodo={removeTodo} completedTodo={completedTodo}></TodoListItems>}
            </div>
            <Footer></Footer>
        </>
    );
};

export default TodoList;
