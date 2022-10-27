import React, { useEffect, useState } from 'react'
import { LocList } from '../cmps/LocList'
import { ForecastList } from '../cmps/ForecastList'
import { locationService } from '../services/locationService'
import { forecastService } from '../services/forecastService'
import { SearchBar } from '../cmps/SearchBar'

export const Home = () => {
  const [searchTerm, setLocation] = useState({ txt: '', res: [] })
  const [forecast, setForecast] = useState({ locKey: '', res: {} })

  const handleChange = async ({ target }) => {
    const { name, value } = target
    await setLocation({ [name]: value })
    console.log(searchTerm);
  }

  useEffect(() => {
    onSearch()
    // eslint-disable-next-line
  }, [searchTerm.txt])

  const onSearch = async () => {
    const res = await locationService.query(searchTerm.txt)
    console.log(res);
    await setLocation({ ...searchTerm, res })
    console.log(searchTerm);
  }

  const onSelectLoc = async (loc) => {
    const res = await forecastService.query(loc.key)
    setForecast({locKey:loc.key, res})
  }
  return (

    <div>
      <h1>Home!</h1>
      {/* <form onSubmit={onSearch}> */}
      <SearchBar handleChange={handleChange}/>
      {searchTerm.res && searchTerm.res.length && <LocList locs={searchTerm.res} onSelectLoc={onSelectLoc} />}
      {forecast.res.DailyForecasts && <ForecastList forecasts={forecast.res.DailyForecasts} />}
      {/* </form> */}
    </div>
  )
}
