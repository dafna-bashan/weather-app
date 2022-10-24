import React from 'react'
import { LocPreview } from './LocPreview'

export const LocList = ({locs, onSelectLoc}) => {
    return (
        <div>
            {locs.map(loc=> <LocPreview key={loc.Key} loc={loc} onSelectLoc={onSelectLoc}/>)}
        </div>
    )
}
