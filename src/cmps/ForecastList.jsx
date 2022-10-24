import React from 'react'
import { ForecastPreview } from './ForecastPreview'

export const ForecastList = ({forecasts}) => {
    console.log(forecasts);
    return (
        <div className="forecast-list flex">
            {forecasts.map(forecast=> <ForecastPreview key={forecast.EpochDate} forecast={forecast}/>)}
        </div>
    )
}
