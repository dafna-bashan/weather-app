import React, { Fragment } from 'react'
import { ForecastPreview } from './ForecastPreview'

export const ForecastList = ({ city, country, forecasts }) => {
    // console.log(forecasts);
    return (
        <Fragment>
            <div>{`${city}, ${country}`}</div>
            <div className="forecast-list">
                {forecasts.map(forecast => <ForecastPreview key={forecast.EpochDate} forecast={forecast} />)}
            </div>
        </Fragment>
    )
}
