import { storageService } from './asyncStorageService';
// import { httpService } from './httpService';

const LOCATION_STORAGE_KEY = 'location'

export const locationService = {
    query,
    getById

};


async function query(locName) {
    if(!locName) return
    const req = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=nkOyFybtTGyunYA168WWKTuGxlVYRRAP&q=${locName}`
    return storageService.query(LOCATION_STORAGE_KEY, req, locName);
    // return httpService.get('board', { params: filterBy });
}

async function getById(locId) {
    return storageService.get(LOCATION_STORAGE_KEY, locId)
    // return httpService.get(`board/${boardId}`);
}