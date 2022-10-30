import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadFavLocs } from '../store/favLocsActions'

export const Favorites = () => {

  const favLocs = useSelector(state => state.favLocs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadFavLocs())
  }, [])

  return (
    <div>Favorites
      <div>{JSON.stringify(favLocs)}</div>
    </div>
  )
}
