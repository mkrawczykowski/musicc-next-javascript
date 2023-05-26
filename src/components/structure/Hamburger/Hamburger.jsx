import React, { useContext } from 'react';
import styles from './Hamburger.module.scss';
// import Store from '../Store/Store';
import Context from '../Store/Store';

const Hamburger = () => {
  const contxt = useContext(Context);
  console.log('contxt');
  console.log(contxt);
  return (
    // <Store>
    <div className={styles.hamburger}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    // </Store>
  )
}

export default Hamburger;