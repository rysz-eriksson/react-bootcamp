import React, { useState } from 'react';
import PropTypes from 'prop-types';
import formStyles from './search_movie.module.scss';

const SearchMovie = ({handleSearch}) =>
{
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        this.setValue(event.target.value)
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(value);
        setValue('')
    }
    return (
        <form 
        onSubmit={handleSubmit}
        className={formStyles.form}
        >
            <label>
                Find your movie 
                <input 
                type="text" 
                value={value} 
                onChange={handleChange} 
                placeholder="What do you want to watch?"
                />
            </label>
            <button 
                type="submit"
            >
                Search
            </button>
        </form>
    )
}

SearchMovie.propTypes = {
    handleSearch: PropTypes.func.isRequired,
}

export default SearchMovie;