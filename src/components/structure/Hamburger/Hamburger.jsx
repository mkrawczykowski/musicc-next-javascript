import React, { useContext } from 'react';
import styles from './Hamburger.module.scss';
import { Context } from '../Context/Context';

const Hamburger = () => {
  const { state, setState } = useContext(Context);

  const clickHandler = (e) => {
    const hamburger = document.getElementById('js-hamburger');
    const newState = { ...state };
    newState.mobileMenuActive = !newState.mobileMenuActive;
    setState(newState);
    hamburger.classList.toggle(styles.active);
  }

  return (
    <div className={styles.hamburger} onClick={clickHandler} id="js-hamburger">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Hamburger;