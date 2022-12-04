import React from 'react'
import { Link } from 'react-router-dom'

export const FavPreview = ({ favLoc, onRemoveFavLoc }) => {
    // console.log(favLoc);
    return (
        <div>
            <Link to={`/${favLoc._id}`}><span style={{ textAlign: 'center' }}>{favLoc.city}, {favLoc.country}</span></Link>
            <button onClick={()=> onRemoveFavLoc(favLoc)}>X</button>
        </div>
    )
}
