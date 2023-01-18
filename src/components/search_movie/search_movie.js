import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { filterSet } from '../../redux/filterSlice';
import Button from '../shared/button/button';


const Form = styled.form`
margin: 10px auto;
display: flex;
label {
    font-size: 20px;
    color: white;
    text-transform: uppercase;
}
`

const SearchMovie = () =>
{
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setValue(event.target.value)
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(filterSet({key: 'byTitle', value}))
    }
    return (
        <Form 
        onSubmit={handleSubmit}
        >
            <Input
                addonBefore={
                    <label style={{
                        fontSize: "14px",
                        color: "white",
                        textTransform: "uppercase"
                    }}>
                        Find your movie
                    </label>
                }            
                allowClear    
                placeholder="What do you want to watch?"
                value={value} 
                onChange={handleChange}
                size="large"
                style={{
                    margin: "auto 0"
                }} 
            />
            <Button 
                primary
                type="submit"
            >
                Search
            </Button>
        </Form>
    )
}

export default SearchMovie;