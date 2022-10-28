import React, { useEffect, useState } from 'react'
import { LocList } from '../cmps/LocList'
import { ForecastList } from '../cmps/ForecastList'
import { locationService } from '../services/locationService'
import { forecastService } from '../services/forecastService'
import { SearchBar } from '../cmps/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { addFavLoc, removeFavLoc } from '../store/favLocsActions'

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState({ txt: '', res: [] })
  const [forecast, setForecast] = useState({ locKey: '', city: '', country: '', res: {}, isFavorite: false })

  const favLocs = useSelector(state => state.favLocs)
  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    const { name, value } = target
    setSearchTerm({ [name]: value })
    console.log(searchTerm);
  }

  useEffect(() => {
    onSearch()
    // eslint-disable-next-line
  }, [searchTerm.txt])

  const onSearch = async () => {
    const res = await locationService.query(searchTerm.txt)
    console.log(res);
    setSearchTerm({ ...searchTerm, res })
  }

  const onSelectLoc = async (loc) => {
    const res = await forecastService.query(loc.key, loc.city, loc.country)
    setForecast({ locKey: loc.key, city: loc.city, country: loc.country, res })
    setSearchTerm({ txt: '', res: [] })
  }

  const onToggleFav = () => {
    if (forecast.isFavorite) {
      dispatch(removeFavLoc(forecast._id))
      setForecast({ ...forecast, isFavorite: false })
      ///TODO -update in storage service
    } else {
      dispatch(addFavLoc({ key: forecast.locKey, forecast: forecast.res, isFavorite: true }))
      setForecast({ ...forecast, isFavorite: true })
       ///TODO -update in storage service
    }
  }

  return (
    <div className="home">
      <div className="search-container">
        <SearchBar searchTerm={searchTerm.txt} handleChange={handleChange} />
        {searchTerm.res && searchTerm.res.length && <LocList locs={searchTerm.res} onSelectLoc={onSelectLoc} />}
      </div>
      {forecast.res.DailyForecasts && <ForecastList city={forecast.city} country={forecast.country} forecast={forecast} onToggleFav={onToggleFav} />}
    </div>
  )
}
