import React from "react";

import styles from './AddTodo.module.css'

interface AddTodoProps {
    todoBody: string,
    setTodoBody: (newBody: string) => void,
    createTodo: (text: string) => void,
}

const AddTodo: React.FC<AddTodoProps> = ({todoBody, setTodoBody, createTodo}) => {
    return (

        <div className={styles.addTodo}>
            <div 
                className={styles.addTodoImg}
                onClick={() => createTodo(todoBody)}
            />

            <input
                value={todoBody}
                onChange={(e) => setTodoBody(e.target.value)}
                className={styles.addTodoInput}
                placeholder="What needs to be done?"
            />
        </div>
    );
}

export default AddTodo;