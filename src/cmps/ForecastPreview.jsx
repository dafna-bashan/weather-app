import React from 'react'

export const ForecastPreview = ({ forecast }) => {

    const { Day, Date, Night, Temperature } = forecast
    return (
        <div className="forecast-preview">
            <div>{Date.substring(8, 10)} - {Date.substring(5, 7)} - {Date.substring(0, 4)}</div>
            <div className="day">Day: {Day.IconPhrase}</div>
            <div className="night">Night: {Night.IconPhrase}</div>
            <div className="temp">Temp: {Temperature.Minimum.Value}&#176;{Temperature.Minimum.Unit} - {Temperature.Maximum.Value}&#176;{Temperature.Maximum.Unit}
            </div>
        </div>
    )
}
