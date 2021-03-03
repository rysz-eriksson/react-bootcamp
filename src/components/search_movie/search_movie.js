import React from 'react';
import PropTypes from 'prop-types';
import formStyles from './search_movie.module.scss';

class SearchMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSearch(this.state.value);
        this.setState({value: ''});
    }

      render() {
        return (
            <form 
            onSubmit={this.handleSubmit}
            className={formStyles.form}
            >
                <label>
                    Find your movie 
                    <input 
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange} 
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
}

SearchMovie.propTypes = {
    handleSearch: PropTypes.func.isRequired,
}

export default SearchMovie;