import { todoService } from "../services/todoService";


export function loadTodos(filterBy) {
    return async (dispatch) => {
        try {
            const todos = await todoService.query(filterBy);
            dispatch({ type: 'SET_TODOS', todos });
        } catch (err) {
            console.log('todoActions: err in loadTodos', err);
        }
    };
}

export function loadTodo(todoId) {
    return async (dispatch) => {
        try {
            const todo = await todoService.getById(todoId);
            dispatch({ type: 'SET_TODO', todo });
            return todo;
        } catch (err) {
            console.log('todoActions: err in loadTodo', err);
        }
    };
}


export function addTodo(todo) {
    return async (dispatch) => {
        try {
            const addedTodo = await todoService.add(todo);
            dispatch({ type: 'ADD_TODO', todo: addedTodo });
        } catch (err) {
            console.log('todoActions: err in addTodo', err);
        }
    };
}

export function removeTodo(todoId) {
    return async (dispatch) => {
        try {
            await todoService.remove(todoId);
            dispatch({ type: 'REMOVE_TODO', todoId });
        } catch (err) {
            console.log('todoActions: err in removeTodo', err);
        }
    };
}

export function updateTodo(todo) {
    return async (dispatch) => {
        try {
            const updatedTodo = await todoService.update(todo);
            dispatch({ type: 'UPDATE_TODO', todo: updatedTodo });
        } catch (err) {
            console.log('todoActions: err in updateTodo', err);
        }
    };
}

export function setFilterBy(filterBy) {
    // console.log('set filter in store');
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy });
    };
}


