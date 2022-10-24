import React from 'react'

export const ForecastPreview = ({ forecast }) => {
    console.log(forecast);
    return (
        <div>
            {forecast.Date.substr(0,10)}
            <div className="day">Day: {forecast.Day.IconPhrase}</div>
            <div className="night">Night: {forecast.Night.IconPhrase}</div>
            <div className="temp">Temperature: {forecast.Temperature.Minimum.Value} &#176; {forecast.Temperature.Minimum.Unit}</div>
        </div>
    )
}
