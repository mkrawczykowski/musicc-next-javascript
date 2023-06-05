import React from 'react';
import styles from './MegaMenuTypeOne.module.scss';
import MenuWidgetList from '../MenuWidgetList/MenuWidgetList';
import MenuWidgetSimple from '../MenuWidgetSimple/MenuWidgetSimple';

const MegaMenuTypeOne = ({ subMenuData }) => {
  return (
    <div className={styles.MegaMenuTypeOne__background}>
      <div className={styles.MegaMenuTypeOne__columns}>
        <div className={styles.MegaMenuTypeOne__column}>
          <MenuWidgetList data={subMenuData.moods} />
        </div>
        <div className={styles.MegaMenuTypeOne__column}>
          <MenuWidgetList data={subMenuData.instruments} />
        </div>
        <div className={styles.MegaMenuTypeOne__column}>
          <MenuWidgetSimple data={subMenuData.mostPopular} />
          <MenuWidgetSimple data={subMenuData.featured} />
        </div>
      </div>
    </div>
  )
}

export default MegaMenuTypeOne;