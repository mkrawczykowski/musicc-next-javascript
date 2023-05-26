import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
    return (
        <input type="text" className={styles.mainSearch} placeholder="Search"></input>
    )
}

export default Search;