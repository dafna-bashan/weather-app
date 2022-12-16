
const initialState = {
    favLocs: [],
    currFavLoc : {}
}


export function favLocsReducer(state = initialState, action) {
console.log("🚀 ~ file: favLocsReducer.js ~ line 8 ~ favLocsReducer ~ action", action)

    switch (action.type) {
        case 'SET_FAV_LOCS':
            return { ...state, favLocs: action.favLocs }

        case 'SET_FAVORITE':
            return { ...state, currFavLoc: action.favLoc }

        case 'ADD_FAV_LOC':
            return { ...state, favLocs: [...state.favLocs, action.favLoc] }

        case 'REMOVE_FAV_LOC':
            return { ...state, favLocs: state.favLocs.filter(favLoc => favLoc._id !== action.locId) }

        default:
            return state;
    }
}