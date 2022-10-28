import React, { Fragment } from 'react'
import { ForecastPreview } from './ForecastPreview'

export const ForecastList = ({ city, country, forecast, onToggleFav }) => {
    // console.log(forecasts);
    return (
        <Fragment>
            <div>{`${city}, ${country}`}</div>
            <button onClick={() => onToggleFav()}>{forecast.isFavorite ? 'Remove from favorites' : 'Add to favorites'}</button>
            <div className="forecast-list">
                {forecast.res.DailyForecasts.map(forecast => <ForecastPreview key={forecast.EpochDate} forecast={forecast} onToggleFav={onToggleFav}/>)}
            </div>
        </Fragment>
    )
}
