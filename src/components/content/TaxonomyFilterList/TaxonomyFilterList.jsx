import react from 'react';
import styles from './TaxonomyFilterList.module.scss';

const TaxonomyFilterList = ({ title, taxonomies }) => {
  return (
    <>
      <h4 className={styles.taxonomyFilterList__heading}>{title}</h4>
      <ul className={styles.taxonomyFilterList__list}>
        {
          taxonomies.map((taxonomy, taxonomyIndex) => {
            return (
              <li key={taxonomyIndex} className={styles.taxonomyFilterList__listItem}>{taxonomy}</li>
            )
          })
        }
      </ul>
    </>

  )
}

export default TaxonomyFilterList;