import React, { useContext } from 'react';
import style from './MegaMenuPanel.module.scss';
import MegaMenuTypeOne from '../MegaMenuTypeOne/MegaMenuTypeOne';
import { Context } from '../Context/Context';

const MegaMenuPanel = ({ megaMenuType, subMenuData, subMenuIndex }) => {
  const { state, setState } = useContext(Context);
  const newState = { ...state };
  let panelActiveClass;

  let activeMegaMenu = newState.activeMegaMenu;
  console.log('===activeMegaMenu===');
  console.log(activeMegaMenu);

  if (activeMegaMenu === subMenuIndex && activeMegaMenu !== undefined) {
    newState.activeMegaMenu = '';
    panelActiveClass = '';
    console.log('panelActiveClass')
    console.log(panelActiveClass)
  }
  if (activeMegaMenu !== subMenuIndex && activeMegaMenu !== undefined) {
    newState.activeMegaMenu = subMenuIndex;
    panelActiveClass = style.megaMenuPanelActive;
    console.log('panelActiveClass')
    console.log(panelActiveClass)
  }


  switch (megaMenuType) {
    case 'mega_menu_1':
      return <div className={[style.megaMenuPanel, panelActiveClass].join(' ')}><MegaMenuTypeOne subMenuData={subMenuData} /></div>;
      break;
    default: return <p>no data</p>
  }
}

export default MegaMenuPanel;