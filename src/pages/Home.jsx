import React, { useEffect, useState } from 'react'
import { LocList } from '../cmps/LocList'
import { ForecastList } from '../cmps/ForecastList'
import { locationService } from '../services/locationService'
import { forecastService } from '../services/forecastService'
import { SearchBar } from '../cmps/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { addFavLoc, loadFavLocs } from '../store/favLocsActions'

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState({ txt: '', res: [] })
  const [forecast, setForecast] = useState({ locKey: '', city: '', country: '', res: {}, isFavorite: false })

  // const favLocs = useSelector(state => state.favLocs)
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
    if (!searchTerm.txt) return
    const res = await locationService.query(searchTerm.txt)
    console.log(res);
    setSearchTerm({ ...searchTerm, res })
  }

  const onSelectLoc = async (loc) => {
    console.log("🚀 ~ file: Home.jsx ~ line 36 ~ onSelectLoc ~ loc", loc)
    const res = await forecastService.query(loc.key, loc.city, loc.country)
    setForecast({ ...res, locKey: loc.key })
    setSearchTerm({ txt: '', res: [] })
  }

  const onAddFav = () => {
    dispatch(addFavLoc({ ...forecast, isFavorite: true }))
    setForecast({ ...forecast, isFavorite: true })
    dispatch(loadFavLocs())
  }

  // const onToggleFav = () => {
  //   if (forecast.isFavorite) {
  //     //ERROR - THE FORECAST LOCAL STATE IS NOT UPDATED WITH THE ID
  //     dispatch(removeFavLoc(forecast._id))
  //     setForecast({ ...forecast, isFavorite: false })
  //   } else {
  //     dispatch(addFavLoc({ ...forecast, isFavorite: true }))
  //     setForecast({ ...forecast, isFavorite: true })
  //   }
  //   dispatch(loadFavLocs())
  // }

  useEffect(() => {

    console.log("🚀 ~ file: Home.jsx ~ line 57 ~ useEffect ~ forecast", forecast)
    const updatedForecast = {...forecast}
    delete updatedForecast.locKey
    forecastService.update(forecast.locKey, updatedForecast)
    // eslint-disable-next-line
  }, [forecast.isFavorite])


  return (
    <div className="home">
      <div className="search-container">
        <SearchBar searchTerm={searchTerm.txt} handleChange={handleChange} />
        {searchTerm.res && searchTerm.res.length && <LocList locs={searchTerm.res} onSelectLoc={onSelectLoc} />}
      </div>
      {forecast.DailyForecasts && <ForecastList city={forecast.city} country={forecast.country} forecast={forecast} onAddFav={onAddFav} />}
    </div>
  )
}
