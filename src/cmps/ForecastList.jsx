import React from 'react'
import { ForecastPreview } from './ForecastPreview'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons'

export const ForecastList = ({ city, country, forecast, onAddFav, onToogleFav }) => {

    return (
        <div className='forecast-list'>
            <div className='forecast-list-title'>
                <div>{`${city}, ${country}`}</div>
                {!forecast.isFavorite && <FontAwesomeIcon  icon={faStarRegular} onClick={() => onToogleFav(true)}/>}
                {forecast.isFavorite && <FontAwesomeIcon icon={faStar} onClick={() => onToogleFav(false)}/>}
            </div>
            <div className="forecast-list-items">
                {forecast.DailyForecasts.map(forecast => <ForecastPreview key={forecast.EpochDate} forecast={forecast} />)}
            </div>
        </div>
    ) 
}
