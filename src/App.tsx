import React from 'react';

import './App.css';

import Header from './components/Header/Header.tsx'
import { todoProps } from './components/Todo/Todo.tsx';
import TodosList from './components/TodosList/TodosList.tsx';
import Footer from './components/Footer/Footer.tsx';

import { getTodos } from './utils/TodoService.ts';

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
    const [selectedCategory, setSelectedCategory] = React.useState<string>('All')

    const curTodos = getTodos(todos, selectedCategory)

    const createTodo = (body: string): void => {
        try {
            const newTodo: todoProps = {
                id: Math.random(),
                body: body,
                done: false
            }
            if (!body) {
                alert('Введите описание todo')
                throw new Error('Текст не может быть путсым')
            } else {
                setTodos([newTodo, ...todos])
                setTodoBody('')
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="App">
            <Header>todos</Header>
            <TodosList
                setTodos={setTodos}
                createTodo={createTodo}
                todos={curTodos}
                todoBody={todoBody}
                setTodoBody={setTodoBody}
            />
            <Footer
                setTodos={setTodos}
                todos={todos}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
        </div>
    );
}

export default App;
