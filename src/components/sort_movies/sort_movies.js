import React from 'react';
import { useDispatch } from 'react-redux';
import { Select } from 'antd';
import styled from 'styled-components';
import { sortSet } from '../../redux/sortSlice';

const Section = styled.section`
    text-transform: uppercase;
    display: flex;
    label {
        margin: 5px 20px;
    }
`

const SortMovies = () => {
    const dispatch = useDispatch()
    const handleSortChange = value => dispatch(sortSet(value))
    
    return (
        <Section>
            <label htmlFor="sort-movies">Sort movies</label>
            <Select 
                defaultValue="release_date"
                onChange={handleSortChange}
                options={[
                    {
                        value: "release_date",
                        label: "release date"
                    },
                    {
                        value: "runtime",
                        label: "runtime"
                    }
                ]}
            />
        </Section>
    )
}

export default SortMovies;