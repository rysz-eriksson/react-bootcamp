import {gql} from '@apollo/client'

export const MOVIES_QUERY = gql`
query MoviesQuery($input: MoviesInput) {
    movies(input: $input) {
        id
        title
        release_date
        poster_path
        genres
        runtime 
    }
}
`

export const MOVIE_QUERY = gql`
query MovieQuery($id: Int!) {
    movie(id: $id) {
        id
        title
        tagline
        vote_average
        vote_count
        release_date
        poster_path
        overview
        budget
        revenue
        genres
        runtime 
    }
}
`

//         tagline: PropTypes.string,
//         vote_average: PropTypes.number.isRequired,
//         vote_count: PropTypes.number.isRequired,
//         release_date: PropTypes.string.isRequired,
//         poster_path: PropTypes.string.isRequired,
//         overview: PropTypes.string,
//         budget: PropTypes.number,
//         revenue: PropTypes.number.isRequired,
//         genres: PropTypes.arrayOf(PropTypes.string).isRequired,
//         runtime: PropTypes.number,