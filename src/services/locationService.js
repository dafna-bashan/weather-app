import axios from 'axios';
import { storageService } from './asyncStorageService';
// import { httpService } from './httpService';
const LOCATION_STORAGE_KEY = 'location'

export const locationService = {
    query,
    getById

};


async function query(locName) {
    // if (!locName) return
    var locations = await storageService.query(LOCATION_STORAGE_KEY, locName)
    if (!locations || !locations[locName]) {
        try {
            const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=nkOyFybtTGyunYA168WWKTuGxlVYRRAP&q=${locName}`)
            storageService.save(LOCATION_STORAGE_KEY, { ...locations, [locName]: res.data })
            console.log('from axios', res.data);
            return res.data
        } catch (err) {
            console.log(err);
        }
    }
    console.log('from storage');
    return locations[locName]
    // return storageService.query(LOCATION_STORAGE_KEY, req, locName);
    // return httpService.get('board', { params: filterBy });
}


async function getById(locId) {
    return storageService.get(LOCATION_STORAGE_KEY, locId)
    // return httpService.get(`board/${boardId}`);
}