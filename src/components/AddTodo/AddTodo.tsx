import React, { useState } from "react";

import styles from './AddTodo.module.css'
import { ITodo } from "../../types";

interface AddTodoInterface {
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
    todos: ITodo[];
}

const AddTodo: React.FC<AddTodoInterface> = ({ setTodos, todos }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo: ITodo = {
            id: Date.now(),
            title: title,
            description: description,
            status: 'pending',
        }
        
        setTodos(prev => {
            const updated = [...prev, newTodo];
            localStorage.setItem('todos', JSON.stringify(updated));
            return updated;
        });

        setIsModalOpen(false);
        setTitle('');
        setDescription('');
    }

    return (
        <>
            <div className={styles.addTodo} onClick={() => setIsModalOpen(true)}>
                <div className={styles.addTodoImg} />
                <div className={styles.addTodoInput}>What needs to be done?</div>
            </div>

            {isModalOpen && (
                <div className={styles.modalBackdrop} onClick={() => setIsModalOpen(false)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <h2>Add Todo</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.modalInputs}>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                                <input
                                    placeholder="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className={styles.modalButtons}>
                                <button
                                    type="button"
                                    className={styles.cancelBtn}
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className={styles.addBtn}
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddTodo;