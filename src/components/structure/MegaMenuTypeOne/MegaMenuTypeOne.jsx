import React from 'react';
import styles from './MegaMenuTypeOne.module.scss';
import MenuWidgetList from '../MenuWidgetList/MenuWidgetList';
import MenuWidgetSimple from '../MenuWidgetSimple/MenuWidgetSimple';

const MegaMenuTypeOne = ({ subMenuData }) => {
  return (
    <div className={styles.MegaMenuTypeOne__background}>
      <div className={styles.MegaMenuTypeOne__columns}>
        <div className={styles.MegaMenuTypeOne__columnNarrow}>
          <MenuWidgetList data={subMenuData.moods} />
        </div>
        <div>
          <MenuWidgetList data={subMenuData.instruments} />
        </div>
        <div>
          <MenuWidgetSimple data={subMenuData.mostPopular} />
          <MenuWidgetSimple data={subMenuData.featured} />
        </div>
      </div>
    </div>
  )
}

export default MegaMenuTypeOne;