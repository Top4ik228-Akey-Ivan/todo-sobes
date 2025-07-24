import React from "react";
import Todo from "../Todo/Todo.tsx";
import { ITodo } from "../../types.ts";
import { AnimatePresence } from "framer-motion";

export interface TodosListProps {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodosList: React.FC<TodosListProps> = ({ todos, setTodos }) => {

    return (
        <div>
            <AnimatePresence>
                {todos.length ?
                    (
                        todos.map((todo) =>
                            <Todo
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                            />
                        )
                    ) : (
                        <p>Активных задач нет</p>
                    )
                }
            </AnimatePresence>
        </div>
    );
}

export default TodosList;