import React from 'react';

import Header from '../layout/header/header';
import Main from '../layout/main/main';
import Footer from '../layout/footer/footer';
import AddMovie from '../add_movie/add_movie';
import SearchMovie from '../search_movie/search_movie';
import FilterMovies from '../filter_movies/filter_movies';
import SortMovies from '../sort_movies/sort_movies';
import ResultsCount from '../results_count/results_count';
import Movies from '../movies/movies';

import JSONData from '../../data/movies.json';

class MoviesApp extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        const json = JSON.parse(JSON.stringify(JSONData))
        this.setState({ movies: json })
    }
    render() {
        return (
            <>
                <Header>
                    <AddMovie />
                    <SearchMovie />
                </Header>
                <Main>
                    <div>
                        <FilterMovies />
                        <SortMovies />
                    </div>
                    <ResultsCount count={this.state.movies.length} />
                    <Movies movies={this.state.movies}/>
                </Main>
                <Footer />
            </>
        )
    }
}

export default MoviesApp;