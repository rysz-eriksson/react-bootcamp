import React, { useEffect, useState } from 'react';

import './app.scss';

import Header from './components/layout/header/header';
import Main from './components/layout/main/main';
import Footer from './components/layout/footer/footer';
import SearchMovie from './components/search_movie/search_movie';
import FilterMovies from './components/filter_movies/filter_movies';
import SortMovies from './components/sort_movies/sort_movies';
import ResultsCount from './components/results_count/results_count';
import Movies from './components/movies/movies';
import Logo from './components/shared/logo/logo';

import JSONData from './data/movies.json';
import AddMovieBtn from './components/add_movie/add_movie_btn/add_movie_btn';

const App = () =>
 {
    const [movies, setMovies] = useState([])

    useEffect(() =>
    {
        setMovies(JSONData)
    }, [])

    const handleSearch = (pattern) => {
        // todo in next tasks
    }

    const handleFilter = (genre) => {
        // todo in next task
    }

    const handleSort = (criteria) => {
        // todo in next tasks
    }
        return (
            <>
                <Header>
                    <div>
                        <Logo />
                        <AddMovieBtn />
                    </div>
                    <SearchMovie handleSearch={handleSearch} />
                </Header>
                <Main>
                    <div>
                        <FilterMovies handleFilter={handleFilter} />
                        <SortMovies handleSort={handleSort} />
                    </div>
                    <ResultsCount count={movies.length} />
                    <Movies movies={movies}/>
                </Main>
                <Footer>
                    <Logo />
                </Footer>
            </>
        )
}

export default App;