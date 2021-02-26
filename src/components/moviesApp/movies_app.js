import React from 'react';

import Header from '../layout/header/header';
import Main from '../layout/main/main';
import Footer from '../layout/footer/footer';

import * as moviesData from '../../data/movies.json'

class MoviesApp extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        const movies = moviesData.slice()
        this.setState({ movies: moviesData})
    }
    render() {
        console.log(this.state.movies.length)
        console.log(moviesData[0])
        return (
            <>
                <Header>

                </Header>
                <Main>

                </Main>
                <Footer />
            </>
        )
    }
}

export default MoviesApp;