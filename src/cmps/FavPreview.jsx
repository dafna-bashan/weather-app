import React from 'react'
import { Link } from 'react-router-dom'

export const FavPreview = ({ favLoc, onRemoveFavLoc }) => {
    const { Day, Night, Temperature } = favLoc.DailyForecasts[0]
    return (
        <div className='forecast-preview'>
            <button onClick={() => onRemoveFavLoc(favLoc)}>X</button>
            <Link to={`/${favLoc._id}`}>
                <div style={{ textAlign: 'center' }}>{favLoc.city}, {favLoc.country}</div>
                <div className="day">Day: {Day.IconPhrase}</div>
                <div className="night">Night: {Night.IconPhrase}</div>
                <div className="temp">Temp: {Temperature.Minimum.Value}&#176;{Temperature.Minimum.Unit} - {Temperature.Maximum.Value}&#176;{Temperature.Maximum.Unit}</div>
            </Link>
        </div>

    )
}
