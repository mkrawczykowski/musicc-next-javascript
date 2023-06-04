import React, { useRef, useContext } from 'react';
import styles from './MainMenuItem.module.scss';
import Link from 'next/link';
import MegaMenuPanel from '../MegaMenuPanel/MegaMenuPanel';

const MainMenuItem = ({ label, url, subMenuData, subMenuIndex, activeMenu }) => {
  const ref__mainMenuItem__link = useRef(null);
  const classes = subMenuData ? styles.mainMenuItem__link_hasSubMenu : undefined;

  const handleLinkClick = () => {
    if (ref__mainMenuItem__link.current) {
      if (ref__mainMenuItem__link.current.classList.contains(styles.mainMenuItem__link_hasSubMenu)) {
        ref__mainMenuItem__link.current.classList.toggle(styles.mainMenuItem__linkActive);
      }
    }
  }
  return (
    <li className={styles.mainMenuItem}>
      <Link href={url} legacyBehavior>
        <a href="" ref={ref__mainMenuItem__link} onClick={handleLinkClick} className={[classes, styles.mainMenuItem__link].join(' ')}>{label}</a>
      </Link>
      {subMenuData ? <MegaMenuPanel megaMenuType='mega_menu_1' subMenuData={subMenuData} panelActive={activeMenu} /> : null}
    </li>
  )
}

export default MainMenuItem;