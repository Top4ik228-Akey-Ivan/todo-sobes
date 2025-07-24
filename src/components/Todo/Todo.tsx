import React from "react";
import { motion } from "framer-motion";

import styles from './Todo.module.css';
import { ITodo } from "../../types";

import deleteIcon from '../../assets/images/delete.png';
import doneIcon from '../../assets/images/check-mark.png';
import inProgressIcon from '../../assets/images/inProgress.png';
import pendingIcon from '../../assets/images/pending.png';

export interface todoProps {
    todo: ITodo;
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const Todo: React.FC<todoProps> = ({ todo, setTodos }) => {
    const statusIcons: Record<ITodo['status'], string> = {
        done: doneIcon,
        'in progress': inProgressIcon,
        pending: pendingIcon,
    };

    const handleDone = (): void => {
        const statusCycle = ['pending', 'in progress', 'done'] as const;

        setTodos(prevTodos => {
            const updatedTodos = prevTodos.map(t => {
                if (t.id !== todo.id) return t;

                const currentIndex = statusCycle.indexOf(t.status);
                const nextStatus = statusCycle[(currentIndex + 1) % statusCycle.length];

                return { ...t, status: nextStatus };
            });

            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return updatedTodos;
        });
    };

    const deleteTodo = () => {
        setTodos(prevTodos => {
            const updatedTodos = prevTodos.filter(t => t.id !== todo.id);
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return updatedTodos;
        });
    };

    return (
        <motion.div
            className={styles.todo}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            layout
        >
            <div className={styles.todoBox}>
                <img
                    src={statusIcons[todo.status]}
                    alt="status"
                    onClick={handleDone}
                    className={styles.todoImg}
                />

                <div>
                    <div className={todo.status === 'done'
                        ? styles.todoText__done
                        : ''
                    }>
                        {todo.title}
                    </div>
                    <p className={styles.desc}>{todo.description}</p>
                </div>
            </div>

            <div className={styles.deleteBtnBox}>
                <img
                    className={styles.deleteBtn}
                    src={deleteIcon}
                    alt="Delete"
                    onClick={deleteTodo}
                />
                <p className={styles.desc}>{todo.status}</p>
            </div>
        </motion.div>
    );
};

export default Todo;
