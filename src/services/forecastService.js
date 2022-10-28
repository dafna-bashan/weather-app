import axios from 'axios';
import { storageService } from './asyncStorageService';
// import { httpService } from './httpService';
const FORECAST_STORAGE_KEY = 'forecast'

export const forecastService = {
    query,
    getById

};


async function query(locKey, city, country) {
    if (!locKey) return
    var forecast = await storageService.query(FORECAST_STORAGE_KEY, locKey)
    if (!forecast || !forecast[locKey]) {
        try {
            const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locKey}?apikey=nkOyFybtTGyunYA168WWKTuGxlVYRRAP`)
            storageService.save(FORECAST_STORAGE_KEY, { ...forecast, [locKey]: {...res.data, city, country} })
            console.log('from axios');
            return res.data
        } catch (err) {
            console.log(err);
        }
    }
    console.log('from storage');
    return forecast[locKey]
    // return storageService.query(FORECAST_STORAGE_KEY, req, locKey);
    // return httpService.get('board', { params: filterBy });
}

async function getById(locId) {
    return storageService.get(FORECAST_STORAGE_KEY, locId)
    // return httpService.get(`board/${boardId}`);
}