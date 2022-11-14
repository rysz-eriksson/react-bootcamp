import React from 'react';

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
import AddMovieBtn from './components/add_movie/add_movie_btn/add_movie_btn';

const App = () =>
 {
        return (
            <>
                <Header>
                    <div className='menu'>
                        <Logo />
                        <AddMovieBtn />
                    </div>
                    <SearchMovie />
                </Header>
                <Main>
                    <div className='submenu'>
                        <FilterMovies />
                        <SortMovies />
                    </div>
                    <ResultsCount />
                    <Movies/>
                </Main>
                <Footer>
                    <Logo />
                </Footer>
            </>
        )
}

export default App;