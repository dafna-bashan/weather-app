import { storageService } from "./asyncStorageService";

export const favoritesService = {
    query,
    getById,
    add,
    update,
    remove,

};

const FAV_STORAGE_KEY = 'favorites'

async function query(filterBy) {
    return storageService.query(FAV_STORAGE_KEY, filterBy);
}

async function getById(favLocId) {
    return storageService.get(FAV_STORAGE_KEY, favLocId)
}

async function remove(favLocId) {
    console.log("🚀 ~ file: favoritesService.js ~ line 25 ~ remove ~ favLocId", favLocId)
    return storageService.remove(FAV_STORAGE_KEY, favLocId);
}

async function update(favLoc) {
    return storageService.put(FAV_STORAGE_KEY, favLoc);
}

async function add(favLoc) {
    return storageService.post(FAV_STORAGE_KEY, favLoc);
}
