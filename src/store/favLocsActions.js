import { favoritesService } from "../services/favoritesService";

export function loadFavLocs(filterBy) {
    return async (dispatch) => {
        try {
            const favLocs = await favoritesService.query(filterBy);
            dispatch({ type: 'SET_FAV_LOCS', favLocs });
        } catch (err) {
            console.log('favLocsActions: err in loadFavLocs', err);
        }
    };
}

export function loadFavLoc(locId) {
    return async (dispatch) => {
        try {
            const favLoc = await favoritesService.getById(locId);
            dispatch({ type: 'SET_FAVORITE', favLoc });
            return favLoc;
        } catch (err) {
            console.log('todoActions: err in loadfavLoc', err);
        }
    };
}


export function addFavLoc(loc) {
    return async (dispatch) => {
        try {
            const favLoc = await favoritesService.add(loc);
            dispatch({ type: 'ADD_FAV_LOC', loc: favLoc });
        } catch (err) {
            console.log('favLocsActions: err in addfavLoc', err);
        }
    };
}

export function removeFavLoc(locId) {
    return async (dispatch) => {
        try {
            await favoritesService.remove(locId);
            console.log("🚀 ~ file: favLocsActions.js ~ line 43 ~ return ~ locId", locId)
            dispatch({ type: 'REMOVE_FAV_LOC', locId });
        } catch (err) {
            console.log('favLocsActions: err in removefavLoc', err);
        }
    };
}

// export function updateTodo(todo) {
//     return async (dispatch) => {
//         try {
//             const updatedTodo = await todoService.update(todo);
//             dispatch({ type: 'UPDATE_TODO', todo: updatedTodo });
//         } catch (err) {
//             console.log('todoActions: err in updateTodo', err);
//         }
//     };
// }

// export function setFilterBy(filterBy) {
//     // console.log('set filter in store');
//     return (dispatch) => {
//         dispatch({ type: 'SET_FILTER_BY', filterBy });
//     };
// }


