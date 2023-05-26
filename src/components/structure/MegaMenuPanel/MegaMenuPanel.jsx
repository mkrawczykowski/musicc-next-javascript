import React from 'react';
import MegaMenuTypeOne from '../MegaMenuTypeOne/MegaMenuTypeOne';

const MegaMenuPanel = ({ megaMenuType, subMenuData }) => {
  switch (megaMenuType) {
    case 'mega_menu_1':
      return <MegaMenuTypeOne subMenuData={subMenuData} />;
      break;
    default: return <p>no data</p>
  }
}

export default MegaMenuPanel;