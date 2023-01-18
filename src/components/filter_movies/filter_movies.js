import React from 'react';
import { List } from 'antd';
import { useDispatch } from 'react-redux';
import { filterSet } from '../../redux/filterSlice';
import filterStyles from './filter_movies.module.scss';

const FilterMovies = () => {
    const dispatch = useDispatch()
    const handleFilterChange = value => dispatch(filterSet({key: 'byGenre', value}))

    const genresList = ["All", "Action", "Adventure", "Science Fiction",  "Drama"]
    return (
        <List 
            itemLayout="horizontal"
            className={filterStyles.filter}
            dataSource={genresList}
            renderItem={(item) => (
                <List.Item>
                  <a onClick={(() => handleFilterChange(item))}>{item}</a>
                </List.Item>
              )}
        />
    )
}

export default FilterMovies;