import axios from 'axios';
import { storageService } from './asyncStorageService';
const FORECAST_STORAGE_KEY = 'forecast'

export const forecastService = {
    query,
    getById,
    update

};


async function query(locKey, city, country) {
    if (!locKey) return
    var forecast = await storageService.query(FORECAST_STORAGE_KEY, locKey)
    if (!forecast || !forecast[locKey]) {
        //TODO - maybe this logic in a "add forecast" function?
        try {
            const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locKey}?apikey=nkOyFybtTGyunYA168WWKTuGxlVYRRAP`)
            console.log(res.data);
            storageService.save(FORECAST_STORAGE_KEY, { ...forecast, [locKey]: { ...res.data, city, country, isFavorite: false } })
            forecast = await storageService.query(FORECAST_STORAGE_KEY, locKey)
            console.log('from axios', forecast[locKey]);
            return forecast[locKey]
        } catch (err) {
            console.log(err);
        }
    }
    console.log('from storage', forecast[locKey]);
    return forecast[locKey]
}

async function getById(locId) {
    return storageService.get(FORECAST_STORAGE_KEY, locId)
}

async function update(locKey, updatedForecast) {
    console.log('updating forecast', locKey, updatedForecast);
    let forecast = await storageService.query(FORECAST_STORAGE_KEY, locKey)
    storageService.save(FORECAST_STORAGE_KEY, { ...forecast, [locKey]: updatedForecast })
}