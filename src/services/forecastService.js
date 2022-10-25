import { storageService } from './asyncStorageService';
// import { httpService } from './httpService';

const FORECAST_STORAGE_KEY = 'forecast'

export const forecastService = {
    query,
    getById

};


async function query(locKey) {
    const req = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locKey}?apikey=nkOyFybtTGyunYA168WWKTuGxlVYRRAP`
    return storageService.query(FORECAST_STORAGE_KEY, req, locKey);
    // return httpService.get('board', { params: filterBy });
}

async function getById(locId) {
    return storageService.get(FORECAST_STORAGE_KEY, locId)
    // return httpService.get(`board/${boardId}`);
}