import React, { useEffect, useMemo, useState } from 'react';

import './App.css';

import Header from './components/Header/Header.tsx'
import TodosList from './components/TodosList/TodosList.tsx';
import { filterStatus, ITodo } from './types.ts';
import AddTodo from './components/AddTodo/AddTodo.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {

    const [todos, setTodos] = useState<ITodo[]>([]);
    const [filterStatus, setFilterStatus] = useState<filterStatus>('all');

    const filteredTodos: ITodo[] = useMemo(() => {
        return filterStatus === 'all'
            ? todos
            : todos.filter(todo => todo.status === filterStatus);
    }, [todos, filterStatus]);


    useEffect(() => {
        const data = localStorage.getItem('todos');
        if (data) {
            try {
                const parsedData = JSON.parse(data);
                if (Array.isArray(parsedData)) {
                    setTodos(parsedData);
                }
            } catch (e) {
                console.error('Ошибка при парсинге данных из localStorage:', e);
            }
        }
    }, []);

    return (
        <div className="App">
            <Header>todos</Header>
            <AddTodo
                setTodos={setTodos}
                todos={filteredTodos}
            />
            <TodosList
                todos={filteredTodos}
                setTodos={setTodos}
            />
            <Footer
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
            />
        </div>
    );
}

export default App;
