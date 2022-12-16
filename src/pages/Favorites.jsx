import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FavList } from '../cmps/FavList'
import { forecastService } from '../services/forecastService'
import { loadFavLocs, removeFavLoc } from '../store/favLocsActions'

export const Favorites = () => {

  const favLocs = useSelector(state => state.favLocs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadFavLocs())
    // eslint-disable-next-line
  }, [])

  const onRemoveFavLoc = (favLoc) => {
    dispatch(removeFavLoc(favLoc._id))
    const updatedForecast = { ...favLoc, isFavorite: false }
    delete updatedForecast.locKey
    forecastService.update(favLoc.locKey, updatedForecast)
  }

  return (
    <div>
      <FavList favLocs={favLocs} onRemoveFavLoc={onRemoveFavLoc} />
    </div>
  )
}
