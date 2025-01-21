import { todoProps } from "../components/Todo/Todo";

export const createTodo =
    (
        body: string,
        todos: todoProps[],
        setTodos: (todos: todoProps[]) => void,
        setTodoBody: (body: string) => void,
    ): void => {
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

export const getTodos = (todos: todoProps[], category: string): todoProps[] => {
    if (category === 'Active') {
        return todos.filter(todo => todo.done === false)
    } else if (category === 'Completed') {
        return todos.filter(todo => todo.done === true)
    }
    return todos
}