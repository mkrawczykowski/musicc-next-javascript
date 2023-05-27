import React, { useContext } from 'react';
import styles from './Hamburger.module.scss';
import { Context } from '../Context/Context';

const Hamburger = () => {
  const { state, setState } = useContext(Context);

  const clickHandler = (e) => {
    const newState = { ...state };
    newState.mobileMenuActive = !newState.mobileMenuActive;
    setState(newState);
    console.log('state');
    console.log(state);
    e.target.classList.toggle('active')
    console.log('=========================');

  }
  return (
    <div className={styles.hamburger} onClick={clickHandler}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Hamburger;