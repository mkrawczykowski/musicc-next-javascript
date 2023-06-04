import React from 'react';
import style from './MegaMenuPanel.module.scss';
import MegaMenuTypeOne from '../MegaMenuTypeOne/MegaMenuTypeOne';

const MegaMenuPanel = ({ megaMenuType, subMenuData, panelActive }) => {
  const panelActiveClass = panelActive ? style.megaMenuPanelActive : undefined;
  switch (megaMenuType) {
    case 'mega_menu_1':
      return <div className={[style.megaMenuPanel, panelActiveClass].join(' ')}><MegaMenuTypeOne subMenuData={subMenuData} /></div>;
      break;
    default: return <p>no data</p>
  }
}

export default MegaMenuPanel;