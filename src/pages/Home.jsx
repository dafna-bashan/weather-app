import React, { useEffect, useRef, useState } from 'react'
import { LocList } from '../cmps/LocList'
import { weatherService } from '../services/weatherService'
import {ForecastList} from '../cmps/ForecastList'

export const Home = () => {
  const [location, setLocation] = useState({ name: '', res: [], forecast: [] })

  const handleChange = async ({ target }) => {
    // console.log('handle change');
    const { name } = target
    const { value } = target
    await setLocation({ name: value })
    console.log(location);
    // weatherService.getLocs(loaction.name)
  }
  const onSearch = async (ev) => {
    ev.preventDefault()
    const res = await weatherService.getLocs(location.name)
    console.log(res);
    await setLocation({ ...location, res })
    console.log(location);
  }

  const onSelectLoc = async (loc) => {
    // console.log(locKey);
    const res = await weatherService.getForecast(loc.key)
    console.log(res.DailyForecasts);
    await setLocation({ ...location, forecast: res.DailyForecasts })
    weatherService.add({...loc, forecast: res.DailyForecasts })
  }
  return (

    <div>
      <h1>Home!</h1>
      {/* {JSON.stringify(location.forecast)} */}
      <form onSubmit={onSearch}>
        <input type="text" name="name" placeholder="search location" onChange={handleChange} />
        {location.res && location.res.length && <LocList locs={location.res} onSelectLoc={onSelectLoc} />}
        {location.forecast && location.forecast.length && <ForecastList forecasts={location.forecast}/>}
        {/* {<ForecastList forecasts={location.forecast}/>} */}
      </form>
    </div>
  )
}
