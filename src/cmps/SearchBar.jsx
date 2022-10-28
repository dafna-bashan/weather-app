import React from 'react'

export const SearchBar = ({ searchTerm, handleChange }) => {
    return (
        <div className="search">
            <input type="text" name="txt" placeholder="Search Location" value={searchTerm} onChange={handleChange} />
        </div>
    )
}
