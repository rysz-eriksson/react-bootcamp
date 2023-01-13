import React from 'react';
import styled from 'styled-components';

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

const Menu = styled.div`
padding: 10px;
display: flex;
justify-content: space-between;
`

const Submenu = styled.div`
display: flex;
justify-content: space-between;
font-size: 18px;
color: white;
margin: 0 auto;
padding-top: 10px;
width: 95%;
`


const App = () =>
 {
        return (
            <>
                <Header>
                    <Menu>
                        <Logo />
                        <AddMovieBtn />
                    </Menu>
                    <SearchMovie />
                </Header>
                <Main>
                    <Submenu>
                        <FilterMovies />
                        <SortMovies />
                    </Submenu>
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