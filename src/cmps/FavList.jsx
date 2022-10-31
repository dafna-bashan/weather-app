import React from 'react'
import { FavPreview } from './FavPreview'

export const FavList = ({ favLocs, onRemoveFavLoc}) => {
    return (
        <div className='flex'>{favLocs.map(favLoc => <FavPreview key={favLoc._id} favLoc={favLoc} onRemoveFavLoc={onRemoveFavLoc}/>)}</div>
    )
}
