import React from 'react';
import styles from './MenuWidgetList.module.scss';

const MenuWidgetList = ({ data }) => {
  return (
    <>
      <h3 className={styles.menuWidgetList__heading}>{data.widgetHeading}</h3>

      <ul className={styles.menuWidgetList__list}>
        {
          data.widgetData.map((widgetDataItem, widgetDataItemIndex) => {
            return (
              <li className={styles.menuWidgetList__listItem} key={widgetDataItemIndex}>
                <a className={styles.menuWidgetList__listItemLink} href={widgetDataItem.url}>
                  {widgetDataItem.label}
                </a>
              </li>
            )
          })
        }
      </ul>
      <a href={data.widgetLinkUrl} className={styles.menuWidgetList__linkAll}>{data.widgetLinkLabel}</a>
    </>
  )
}

export default MenuWidgetList;