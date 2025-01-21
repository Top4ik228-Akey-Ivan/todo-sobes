import { todoProps } from "../components/Todo/Todo";

export const getTodos = (todos: todoProps[], category: string): todoProps[] => {
    if (category === 'Active') {
        return todos.filter(todo => todo.done === false)
    } else if ( category === 'Completed') {
        return todos.filter(todo => todo.done === true)
    }
    return todos
}