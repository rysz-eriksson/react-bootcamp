import { MOVIES_QUERY } from "./queries"
import { useQuery } from "@apollo/client"

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