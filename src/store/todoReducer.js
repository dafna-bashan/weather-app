
const initialState = {
    todos: [],
    currTodo: { txt: '', isActive: true },
    filterBy: { txt: '', isActive: 'all' }
}


export function todoReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_TODOS':
            return { ...state, todos: action.todos }

        case 'SET_TODO':
            return { ...state, currTodo: action.todo }

        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.todo] }

        case 'REMOVE_TODO':
            return { ...state, todos: state.todos.filter(todo => todo._id !== action.todoId) }

        case 'UPDATE_TODO':
            return { ...state, todos: state.todos.map(todo => todo._id === action.todo._id ? action.todo : todo) }

        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }
        // case 'SET_LOADING':
        //     return {
        //         ...state,
        //         isLoading: action.isLoading
        //     }

        default:
            return state;
    }
}