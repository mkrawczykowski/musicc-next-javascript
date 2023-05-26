import React from 'react';
import styles from './SectionAboutMe.module.scss';
import { Container, Col } from '../../structure/Grid/Grid';

const SectionAboutMe = () => {
  return (
    <section className={styles.sectionAboutMe}>
      <Container classes={'containerTwoColumns'}>
        <Col>
          <h2 className={styles.sectionAboutMe__header}>Im Michael</h2>
        </Col>
        <Col></Col>
      </Container>
    </section>
  )
}