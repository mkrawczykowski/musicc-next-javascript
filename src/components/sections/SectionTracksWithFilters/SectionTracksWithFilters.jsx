import React from "react";
import styles from './SectionTracksWithFilters.module.scss';
import { Container, Col } from '../../structure/Grid/Grid';
import TaxonomyFilterList from '../../content/TaxonomyFilterList/TaxonomyFilterList';

const moods = [
  'warm',
  'cold',
  'mysterious',
  'emotional',
  'happy',
  'sad',
  'melancholic',
  'romantic',
  'calm',
  'energeting/action',
  'motivation',
  'upbeat',
]

const instruments = [
  'synth',
  'piano',
  'drums',
  'bass',
  'double bass',
];

const SectionTracksWithFilters = () => {
  return (
    <section className={styles.sectionTracksWithFilters}>
      <Container classes={'containerTwoColumns'}>
        <h2 className={styles.sectionTracksWithFilters}>Free music</h2>
        <h3 className={styles.sectionTracksWithFilters__sectionSubheading}>(Creative Commons)</h3>
        <Col>
          <TaxonomyFilterList title="by mood" taxonomies={moods}></TaxonomyFilterList>
          <TaxonomyFilterList title="by instrument" taxonomies={instruments}></TaxonomyFilterList>
        </Col>
        <Col>


        </Col>
      </Container>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
    </section>
  );
}

export default SectionTracksWithFilters;