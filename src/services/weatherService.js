import axios from 'axios';
import { storageService } from './asyncStorageService';
// import { httpService } from './httpService';
// import { userService } from './userService';


export const weatherService = {
    query,
    getById,
    add,
    update,
    remove,
    getLocs,
    getForecast
};

async function query(filterBy) {
    return storageService.query('loc', filterBy);
    // return httpService.get('board', { params: filterBy });
}

async function getById(locId) {
    // console.log(`file: boardService.js || line 18 || filterBy`, filterBy)
    return storageService.get('loc', locId)
    // return httpService.get(`board/${boardId}`);
}

async function remove(locId) {
    console.log('removing in service', locId)
    return storageService.remove('loc', locId);
    // return httpService.delete(`board/${boardId}`);
}

async function update(loc) {
    // we might need to change this to the id of the board
    return storageService.put('loc', loc);
    // return httpService.put(`board/${board._id}`, board);
}

async function add(loc) {
    return storageService.post('loc', loc);
    // const currUser = userService.getLoggedinUser();
    // return httpService.post(`board`, currUser);
}

async function getLocs(loc) {
    try {
        let res = JSON.parse(localStorage.getItem(loc))
        if (!res || !res.length) {
            res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=nkOyFybtTGyunYA168WWKTuGxlVYRRAP&q=${loc}`)
            localStorage.setItem(loc, JSON.stringify(res.data))
            console.log('from axios');
            return res.data
        }
        console.log('from storage');
        return res
    } catch (err) {
        console.log(err);
    }
}

async function getForecast(locKey) {
    try {
        let res = JSON.parse(localStorage.getItem(locKey))
        // console.log(res);
        if (!res) {
            res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locKey}?apikey=nkOyFybtTGyunYA168WWKTuGxlVYRRAP`)
            localStorage.setItem(locKey, JSON.stringify(res.data))
            console.log('from axios');
            // console.log(res.data); 
            return res.data
        }
        console.log('from storage');
        return res
    } catch (err) {
        console.log(err);
    }
}