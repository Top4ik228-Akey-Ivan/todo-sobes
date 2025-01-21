import React from "react";
import Todo, { todoProps } from "../Todo/Todo.tsx";
import AddTodo from "../AddTodo/AddTodo.tsx";

interface TodosListProps {
    todos: todoProps[],
    todoBody: string,
    setTodoBody: (newBody: string) => void,
    createTodo: (text: string) => void,
    setTodos: (todos: todoProps[]) => void,
}

const TodosList: React.FC<TodosListProps> = ({ todos, todoBody, setTodoBody, createTodo, setTodos }) => {
    return (
        <div>
            <AddTodo
                createTodo={createTodo}
                todoBody={todoBody}
                setTodoBody={setTodoBody}
            />
            {todos.map((todo) =>
                <Todo
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    key={todo.id}
                    id={todo.id}
                    body={todo.body}
                    done={todo.done}
                />
            )}
        </div>
    );
}

export default TodosList;