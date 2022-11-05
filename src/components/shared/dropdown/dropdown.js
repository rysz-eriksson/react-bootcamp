import React from 'react'
import styles from "./dropdown.module.scss"

const Dropdown = ({options, setSelected, dropdownId = undefined}) =>
{
    const handleChange = (e) => setSelected(e.target.value)

    return (
        <div>
            <select id={dropdownId} onChange={(e) => handleChange(e)}>
                {options.map(item => <option value={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default Dropdown