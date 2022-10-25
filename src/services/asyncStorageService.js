import axios from "axios"

export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

async function query(entityType, request, searchTerm) {
    console.log("🚀 ~ file: asyncStorageService.js ~ line 12 ~ query ~ searchTerm", searchTerm)
    // we need to add the filterBy details. 
    var entities = JSON.parse(localStorage.getItem(entityType))
    console.log("🚀 ~ file: asyncStorageService.js ~ line 14 ~ query ~ entities", entities)
    console.log(entities[searchTerm]);
    try {
        if (!entities || !entities[searchTerm]) {
            var res = await axios.get(request)
            _save(entityType, { ...entities, [searchTerm]: res.data })
            console.log('from axios');
            return Promise.resolve(res.data)
        }

    } catch (err) {
        console.log(err);
    }

    console.log('from storage');
    return Promise.resolve(entities[searchTerm])
}

// async function getForecast(locKey) {
//     try {
//         let res = JSON.parse(localStorage.getItem(locKey))
//         // console.log(res);
//         if (!res) {
//             res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locKey}?apikey=nkOyFybtTGyunYA168WWKTuGxlVYRRAP`)
//             localStorage.setItem(locKey, JSON.stringify(res.data))
//             console.log('from axios');
//             // console.log(res.data); 
//             return res.data
//         }
//         console.log('from storage');
//         return res
//     } catch (err) {
//         console.log(err);
//     }
// }
// async function getLocs(loc) {
//     try {
//         let res = JSON.parse(localStorage.getItem(loc))
//         if (!res || !res.length) {
//             res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=nkOyFybtTGyunYA168WWKTuGxlVYRRAP&q=${loc}`)
//             localStorage.setItem(loc, JSON.stringify(res.data))
//             console.log('from axios');
//             return res.data
//         }
//         console.log('from storage');
//         return res
//     } catch (err) {
//         console.log(err);
//     }
// }

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}

function post(entityType, newEntity) {
    newEntity._id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}


function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}