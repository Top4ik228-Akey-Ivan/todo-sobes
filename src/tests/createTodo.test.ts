import { createTodo } from "../utils/TodoService";

describe('createTodo', () => {
    let todos;
    let setTodos;
    let setTodoBody;

    beforeEach(() => {
        todos = [{ id: 1, body: 'test todo', done: false }];
        setTodos = jest.fn();
    });

    it('should add a new todo when body is provided', () => {
        createTodo('new todo', todos, setTodos, setTodoBody);
        expect(setTodos).toHaveBeenCalledWith(expect.arrayContaining([
            expect.objectContaining({ body: 'new todo' }),
        ]));
    });

    it('should alert and not call setTodos when body is empty', () => {
        global.alert = jest.fn(); // Мокаем alert
        createTodo('', todos, setTodos, setTodoBody);
        expect(global.alert).toHaveBeenCalledWith('Введите описание todo');
        expect(setTodos).not.toHaveBeenCalled();
    });
});