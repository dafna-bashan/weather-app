import React, { Fragment } from 'react'
import { ForecastPreview } from './ForecastPreview'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons'

export const ForecastList = ({ city, country, forecast, onAddFav, onToogleFav }) => {
    // console.log(forecasts);
    return (
        <div className='forecast-list'>
            <div className='forecast-list-title'>
                <div>{`${city}, ${country}`}</div>
                {/* <FontAwesomeIcon icon={faStar} /> */}
                {/* <FontAwesomeIcon icon={faStarRegular} /> */}
                {/* <button onClick={() => onToggleFav()}>{forecast.isFavorite ? 'Remove from favorites' : 'Add to favorites'}</button> */}
                {/* {!forecast.isFavorite && <button onClick={() => onAddFav()}><FontAwesomeIcon icon={faStarRegular} /></button>} */}
                {!forecast.isFavorite && <FontAwesomeIcon  icon={faStarRegular} onClick={() => onToogleFav(true)}/>}

                {forecast.isFavorite && <FontAwesomeIcon icon={faStar} onClick={() => onToogleFav(false)}/>}
            </div>
            <div className="forecast-list-items">
                {forecast.DailyForecasts.map(forecast => <ForecastPreview key={forecast.EpochDate} forecast={forecast} />)}
            </div>
        </div>
    ) 
}
