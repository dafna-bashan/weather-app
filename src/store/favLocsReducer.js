
const initialState = {
    favLocs: []
}


export function favLocsReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_FAV_LOCS':
            return { ...state, favLocs: action.favLocs }

        // case 'SET_FAVORITE':
        //     return { ...state, currTodo: action.favorite }

        case 'ADD_FAV_LOC':
            return { ...state, favLocs: [...state.favLocs, action.favLoc] }

        case 'REMOVE_FAV_LOC':
            return { ...state, favLocs: state.favLocs.filter(favLoc => favLoc._id !== action.favLocId) }

        // case 'UPDATE_TODO':
        //     return { ...state, todos: state.todos.map(todo => todo._id === action.todo._id ? action.todo : todo) }

        // case 'SET_FILTER_BY':
        //     return {
        //         ...state,
        //         filterBy: { ...action.filterBy }
        //     }
        // case 'SET_LOADING':
        //     return {
        //         ...state,
        //         isLoading: action.isLoading
        //     }

        default:
            return state;
    }
}