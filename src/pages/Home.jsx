import React, { useEffect, useState } from 'react'
import { LocList } from '../cmps/LocList'
import { ForecastList } from '../cmps/ForecastList'
import { locationService } from '../services/locationService'
import { forecastService } from '../services/forecastService'

export const Home = () => {
  const [searchTerm, setLocation] = useState({ txt: '', res: [] })
  const [forecast, setForecast] = useState({ locKey: '', res: {} })

  const handleChange = async ({ target }) => {
    // console.log('handle change');
    const { name, value } = target
    await setLocation({ [name]: value })
    console.log(searchTerm);
    // weatherService.getLocs(loaction.name)
  }

  useEffect(() => {
    onSearch()
    // eslint-disable-next-line
  }, [searchTerm.txt])

  const onSearch = async () => {
    // const res = await weatherService.getLocs(location.name)
    const res = await locationService.query(searchTerm.txt)
    console.log(res);
    await setLocation({ ...searchTerm, res })
    console.log(searchTerm);
  }
  // const onSearch = async (ev) => {
  //   ev.preventDefault()
  //   const res = await weatherService.getLocs(location.name)
  //   console.log(res);
  //   await setLocation({ ...location, res })
  //   console.log(location);
  // }

  const onSelectLoc = async (loc) => {
    // console.log(locKey);
    // const res = await weatherService.getForecast(loc.key)
    const res = await forecastService.query(loc.key)
    // console.log(res.DailyForecasts);
    // await setLocation({ ...searchTerm, forecast: res.DailyForecasts })
    setForecast({locKey:loc.key, res})
    // weatherService.add({ ...loc, forecast: res.DailyForecasts })
  }
  return (

    <div>
      <h1>Home!</h1>
      {/* {JSON.stringify(location.forecast)} */}
      {/* <form onSubmit={onSearch}> */}
      <input type="text" name="txt" placeholder="search location" onChange={handleChange} />
      {searchTerm.res && searchTerm.res.length && <LocList locs={searchTerm.res} onSelectLoc={onSelectLoc} />}
      {forecast.res.DailyForecasts && <ForecastList forecasts={forecast.res.DailyForecasts} />}
      {/* {<ForecastList forecasts={location.forecast}/>} */}
      {/* </form> */}
    </div>
  )
}
