import { MOVIES_QUERY, DELETE_MOVIE_MUTAION } from "./queries"
import { useQuery, useMutation } from "@apollo/client"

export const useMovies = (filter, sort) => {
    const filterSortInput = {
        'filterBy': filter,
        'sortBy': sort.value.toUpperCase()
    }
    const {data, loading, error} = useQuery(MOVIES_QUERY, {
        // fetchPolicy: "network-only",
        variables: {input: filterSortInput}
    })

    return {data, loading, error}    
}

export const useDeleteMovie = (id) => {
    const [deleteMovie, result] = useMutation(DELETE_MOVIE_MUTAION, {
        variables: {id},
        refetchQueries: [
            {query: MOVIES_QUERY},
            'MoviesQuery'
        ]
    })

    return [
        deleteMovie,
        result
    ] 
}