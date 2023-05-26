import React from 'react';
import styles from './MenuWidgetSimple.module.scss';

const MenuWidgetSimple = ({ data }) => {
  return (
    <>
      <h3 className={styles.menuWidgetSimple__heading}>{data.widgetHeading}</h3>
      <p className={styles.menuWidgetSimple__paragraph}>{data.widgetData}</p>
      <a href={data.widgetLinkUrl} className={styles.menuWidgetList__linkAll}>{data.widgetLinkLabel}</a>
    </>

  )
}

export default MenuWidgetSimple;