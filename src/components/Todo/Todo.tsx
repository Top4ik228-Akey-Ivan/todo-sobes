import React from "react";

import styles from './Todo.module.css'

export interface todoProps {
    id: number;
    body: string;
    done: boolean;
    todo?: todoProps;
    todos?: todoProps[];
    setTodos?: (todos: todoProps[]) => void;
}

const Todo: React.FC<todoProps> = ({ id, body, done, setTodos, todo, todos }) => {

    const handleDone = (): void => {
        if (setTodos && todo && todos) {
            setTodos(todos.map(t => t.id === todo.id ? { ...t, done: !done } : t))
        }
    }

    return (
        <div className={styles.todo}>
            <div
                className={done
                    ? [styles.todoImg, styles.todoImg__done].join(' ')
                    : styles.todoImg
                } 
                onClick={handleDone}
            />

            <div className={done
                ? styles.todoText__done
                : ''
            }>
                {body}
            </div>
        </div>
    );
}

export default Todo;