import React from "react";

import styles from './Footer.module.css'
import { todoProps } from "../Todo/Todo";
import { getTodos } from "../../utils/TodoService.ts";

interface FooterProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    todos: todoProps[];
    setTodos: (todos: todoProps[]) => void;
}

const Footer: React.FC<FooterProps> = ({selectedCategory, setSelectedCategory, todos, setTodos})=> {

    const activeTodosCount: number = getTodos(todos, 'Active').length

    const handleSelect = (category: string): void => {
        setSelectedCategory(category)
    }

    const clearCompleted = (): void => {
        const newTodos = getTodos(todos, 'Active')
        setTodos(newTodos)
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footerText}>{activeTodosCount} items left</div>
            <div className={styles.footerSelect}>
                <div
                    className={selectedCategory === 'All'
                        ? [styles.footerText, styles.clickable, styles.selectedCategory].join(' ')
                        : [styles.footerText, styles.clickable].join(' ')
                    }
                    onClick={() => handleSelect('All')}
                >
                    All
                </div>
                <div
                    className={selectedCategory === 'Active'
                        ? [styles.footerText, styles.clickable, styles.selectedCategory].join(' ')
                        : [styles.footerText, styles.clickable].join(' ')
                    }
                    onClick={() => handleSelect('Active')}
                >
                    Active
                </div>
                <div
                    className={selectedCategory === 'Completed'
                        ? [styles.footerText, styles.clickable, styles.selectedCategory].join(' ')
                        : [styles.footerText, styles.clickable].join(' ')
                    }
                    onClick={() => handleSelect('Completed')}
                >
                    Completed
                </div>
            </div>
            <div
                className={[styles.footerText, styles.clickable].join(' ')}
                onClick={() => clearCompleted()}
            >Clear completed</div>
        </footer>
    );
}

export default Footer;