import React from 'react'

export const SearchBar = ({ handleChange }) => {
    return (
        <div>
            <input type="text" name="txt" placeholder="Search Location" onChange={handleChange} />
        </div>
    )
}
