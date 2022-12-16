import React from 'react'

export const LocPreview = ({ loc, onSelectLoc }) => {
    
    return (
        <div className="loc-preview" onClick={() => onSelectLoc({ key: loc.Key, city: loc.LocalizedName, country: loc.Country.LocalizedName })}>
            <span>{loc.LocalizedName} </span><span>{loc.Country.LocalizedName}</span>
        </div>
    )
}
