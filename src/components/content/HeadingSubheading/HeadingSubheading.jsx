import React from 'react';
import styles from './HeadingSubheading.module.scss';

const HeadingSubheading = ({ mainHeadingType, mainHeadingString, secondaryHeadingType, secondaryHeadingString }) => {
  const MainHeadingTag = mainHeadingType;
  const SecondaryHeadingTag = secondaryHeadingType;

  return (
    <>
      <MainHeadingTag className={styles.headingSubheading__mainHeading}>{mainHeadingString}</MainHeadingTag>
      <SecondaryHeadingTag className={styles.headingSubheading__secondaryHeading}>{secondaryHeadingString}</SecondaryHeadingTag>
    </>
  )
}

export default HeadingSubheading;