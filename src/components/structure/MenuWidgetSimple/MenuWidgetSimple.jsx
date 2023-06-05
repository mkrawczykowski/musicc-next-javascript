import React from 'react';
import styles from './MenuWidgetSimple.module.scss';

const MenuWidgetSimple = ({ data }) => {
  return (
    <div className={styles.menuWidgetSimple}>
      <h3 className={styles.menuWidgetSimple__heading}>{data.widgetHeading}</h3>
      <p className={styles.menuWidgetSimple__paragraph}>{data.widgetData}</p>
      <a href={data.widgetLinkUrl} className={styles.menuWidgetSimple__linkAll}>{data.widgetLinkLabel}</a>
    </div>
  )
}

export default MenuWidgetSimple;