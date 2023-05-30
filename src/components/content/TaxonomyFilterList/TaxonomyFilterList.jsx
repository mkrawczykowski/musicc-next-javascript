import React, { useRef } from 'react';
import styles from './TaxonomyFilterList.module.scss';

const TaxonomyFilterList = ({ title, taxonomies }) => {
  const ref__taxonomyFilterList = useRef(null);
  const ref__taxonomyFilterList__heading = useRef(null);
  const ref__taxonomyFilterList__list = useRef(null);

  const headingClickHandler = () => {
    ref__taxonomyFilterList__heading.current.classList.toggle(styles.taxonomyFilterList__headingActive)
    ref__taxonomyFilterList__list.current.classList.toggle(styles.taxonomyFilterList__listActive)
  }

  if (title && taxonomies) {
    return (
      <div className={styles.taxonomyFilterList} ref={ref__taxonomyFilterList}>
        <h4
          className={styles.taxonomyFilterList__heading}
          ref={ref__taxonomyFilterList__heading}
          onClick={headingClickHandler}>
          {title}
        </h4>
        <ul className={styles.taxonomyFilterList__list} ref={ref__taxonomyFilterList__list}>
          {
            taxonomies.map((taxonomy, taxonomyIndex) => {
              const isActiveClass = taxonomy.active ? styles.taxonomyFilterList__listItemActive : null
              return (
                <li key={taxonomyIndex} className={[styles.taxonomyFilterList__listItem, isActiveClass].join(' ')}>{taxonomy.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default TaxonomyFilterList;