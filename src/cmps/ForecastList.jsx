import React, { Fragment } from 'react'
import { ForecastPreview } from './ForecastPreview'

export const ForecastList = ({ city, country, forecast, onAddFav }) => {
    // console.log(forecasts);
    return (
        <Fragment>
            <div>{`${city}, ${country}`}</div>
            {/* <button onClick={() => onToggleFav()}>{forecast.isFavorite ? 'Remove from favorites' : 'Add to favorites'}</button> */}
            {!forecast.isFavorite && <button onClick={() => onAddFav()}>Add to favorites</button>}
            {forecast.isFavorite && <span>Added to favorites</span>}
            <div className="forecast-list">
                {forecast.DailyForecasts.map(forecast => <ForecastPreview key={forecast.EpochDate} forecast={forecast} />)}
            </div>
        </Fragment>
    )
}
