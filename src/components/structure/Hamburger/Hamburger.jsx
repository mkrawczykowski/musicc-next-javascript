import React, { useContext } from 'react';
import styles from './Hamburger.module.scss';
import { Context } from '../Context/Context';

const Hamburger = () => {
  const { state, setState } = useContext(Context);
  console.log('state');
  console.log(state);
  return (
    <div className={styles.hamburger}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Hamburger;