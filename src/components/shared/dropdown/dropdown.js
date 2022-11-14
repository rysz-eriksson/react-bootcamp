import React from 'react'
import styles from "./dropdown.module.scss"

const Dropdown = ({options, setSelected, dropdownId = undefined}) =>
{
    return (
        <div>
            <select id={dropdownId} onChange={(e) => setSelected(e.target.value)} className={styles.dropdown}>
                {options.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default Dropdown