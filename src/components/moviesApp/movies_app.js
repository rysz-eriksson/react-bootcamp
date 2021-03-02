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
        movies: []
    }

    handleSearch = (pattern) => {
        console.log(pattern)
        this.setState(() => {
            return {
                movies: this.state.movies.filter(({title}) => title.toLowerCase().includes(pattern.toLowerCase()))
            }
        })
    }

    handleFilter = (genre) => {
        if (genre !== 'all') {
            this.setState(() => {
                return  {
                    movies: movies.filter(({genres}) => genres.includes(genre))
                }
            })
        }
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
                    <AddMovie />
                    <SearchMovie handleSearch={this.handleSearch}/>
                </Header>
                <Main>
                    <div>
                        <FilterMovies />
                        <SortMovies />
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