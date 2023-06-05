import React, { useRef, useContext } from 'react';
import styles from './MainMenuItem.module.scss';
import Link from 'next/link';
import MegaMenuPanel from '../MegaMenuPanel/MegaMenuPanel';
import { Context } from '../Context/Context';

const MainMenuItem = ({ label, url, subMenuData, subMenuIndex }) => {
  const { state, setState } = useContext(Context);
  const ref__mainMenuItem__link = useRef(null);
  const ref__MegaMenuPanel = useRef(null);
  const classes = subMenuData ? styles.mainMenuItem__link_hasSubMenu : undefined;

  const handleLinkClick = () => {
    if (ref__mainMenuItem__link.current) {
      if (ref__mainMenuItem__link.current.classList.contains(styles.mainMenuItem__link_hasSubMenu)) {
        ref__mainMenuItem__link.current.classList.toggle(styles.mainMenuItem__linkActive);

        const newState = { ...state };
        let activeMegaMenu = newState.activeMegaMenu;
        if (activeMegaMenu === subMenuIndex) {
          newState.activeMegaMenu = '';
        }
        if (activeMegaMenu !== subMenuIndex) {
          newState.activeMegaMenu = subMenuIndex;
          console.log('newState.activeMegaMenu');
          console.log(newState.activeMegaMenu);
        }
        setState(newState);
      }
    }
  }
  return (
    <li className={styles.mainMenuItem}>
      <Link href={url} legacyBehavior>
        <a href="" ref={ref__mainMenuItem__link} onClick={handleLinkClick} className={[classes, styles.mainMenuItem__link].join(' ')}>{label}</a>
      </Link>
      {subMenuData ? <MegaMenuPanel megaMenuType='mega_menu_1' subMenuData={subMenuData} subMenuIndex={subMenuIndex} /> : null}
    </li>
  )
}

export default MainMenuItem;