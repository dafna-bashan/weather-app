import React from 'react'
import { ForecastPreview } from './ForecastPreview'

export const FavPreview = ({ favLoc, onRemoveFavLoc }) => {
    // console.log(favLoc);
    return (
        <div>
            <span style={{ textAlign: 'center' }}>{favLoc.city}, {favLoc.country}</span>
            <ForecastPreview forecast={favLoc.DailyForecasts[0]} />
            <button onClick={()=> onRemoveFavLoc(favLoc)}>Remove from favorites</button>
        </div>
    )
}
