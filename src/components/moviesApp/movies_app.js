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
import Logo from '../shared/logo/logo';

import JSONData from '../../data/movies.json';

class MoviesApp extends React.Component {
    state = {
        movies: [],
    }

    handleSearch = (pattern) => {
        // todo in next tasks
    }

    handleFilter = (genre) => {
        // todo in next task
    }

    handleSort = (criteria) => {
        // todo in next tasks
    }

    getInitialState = () => {
        const json = JSON.parse(JSON.stringify(JSONData))
        this.setState({ movies: json })
    }



    componentDidMount() {
        this.getInitialState()
    }

    render() {
        return (
            <>
                <Header>
                    <div>
                        <Logo />
                        <AddMovie />
                    </div>
                    <SearchMovie handleSearch={this.handleSearch} />
                </Header>
                <Main>
                    <div>
                        <FilterMovies handleFilter={this.handleFilter} />
                        <SortMovies handleSort={this.handleSort} />
                    </div>
                    <ResultsCount count={this.state.movies.length} />
                    <Movies movies={this.state.movies}/>
                </Main>
                <Footer>
                    <Logo />
                </Footer>
            </>
        )
    }
}

export default MoviesApp;