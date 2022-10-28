import React from 'react'

export const LocPreview = ({ loc, onSelectLoc }) => {
    // console.log(loc.Key);
    return (
        <div className="loc-preview" onClick={() => onSelectLoc({ key: loc.Key, name: loc.AdministrativeArea.LocalizedName, country: loc.Country.LocalizedName })}>
            <span>{loc.AdministrativeArea.LocalizedName} </span><span>{loc.Country.LocalizedName}</span>
        </div>
    )
}
