import React, { useRef } from 'react';
import styles from './MainMenuItem.module.scss';
import Link from 'next/link';
import MegaMenuPanel from '../MegaMenuPanel/MegaMenuPanel';

const MainMenuItem = ({ label, url, subMenuData }) => {
  const ref = useRef(null);
  const classes = subMenuData ? 'hasSubMenu' : undefined;

  const handleLinkClick = () => {
    if (ref.current) {
      if (ref.current.classList.contains('hasSubMenu')) {
        ref.current.classList.toggle('active');
      }
    }
  }
  return (
    <li className={styles.mainMenuItem}>
      <Link href={url} legacyBehavior>
        <a href="" ref={ref} onClick={handleLinkClick} className={[classes, styles.mainMenuItem__link].join(' ')}>{label}</a>
      </Link>
      {subMenuData ? <MegaMenuPanel megaMenuType='mega_menu_1' subMenuData={subMenuData} /> : null}
    </li>
  )
}

export default MainMenuItem;