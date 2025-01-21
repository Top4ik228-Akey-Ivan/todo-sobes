import React from 'react';

import './App.css';

import Header from './components/Header/Header.tsx'
import { todoProps } from './components/Todo/Todo.tsx';
import TodosList from './components/TodosList/TodosList.tsx';

function App() {

    const [todoBody, setTodoBody] = React.useState<string>('')
    const [todos, setTodos] = React.useState<todoProps[]>([
        {
            id: 1,
            body: 'add todo',
            done: false,
        },
        {
            id: 2,
            body: 'go to the gym',
            done: true,
        },
    ])

    const createTodo = (body: string): void => {
        const newTodo: todoProps = {
            id: Math.random(),
            body: body,
            done: false
        }
        if (body) {
            setTodos([newTodo, ...todos])
            setTodoBody('')
        } else {
            alert('Введите описание todo')
        }
    }

    return (
        <div className="App">
            <Header>todos</Header>
            <TodosList
                setTodos={setTodos}
                createTodo={createTodo}
                todos={todos}
                todoBody={todoBody}
                setTodoBody={setTodoBody}
            />
        </div>
    );
}

export default App;
