import React from "react";
import styles from './SectionTracksWithFilters.module.scss';
import { Container, Row, Col } from '../../structure/Grid/Grid';
import TaxonomyFilterList from '../../content/TaxonomyFilterList/TaxonomyFilterList';
import TrackBox from '../../content/TrackBox/TrackBox';

const moods = [
  {
    name: 'warm',
    active: true
  },
  {
    name: 'cold',
    active: false
  },
  {
    name: 'mysterious',
    active: true
  },
  {
    name: 'emotional',
    active: false
  },
  {
    name: 'happy',
    active: true
  },
  {
    name: 'sad',
    active: false
  },
  {
    name: 'motivation',
    active: false
  },
  {
    name: 'upbeat',
    active: false
  },
]

const instruments = [
  {
    name: 'synth',
    active: false
  },
  {
    name: 'piano',
    active: true
  },
  {
    name: 'drums',
    active: false
  },
  {
    name: 'bass',
    active: false
  },
  {
    name: 'double bass',
    active: false
  },
];

const type = [
  {
    name: 'alternative',
    active: false
  },
]

const SectionTracksWithFilters = () => {
  return (
    <section className={styles.sectionTracksWithFilters}>
      <Container>
        <Row>
          <h2 className={styles.sectionTracksWithFilters__sectionHeading}>Free music</h2>
          <h3 className={styles.sectionTracksWithFilters__sectionSubheading}>(Creative Commons)</h3>
        </Row>
        <Row classes={'rowFirstColumnSidebar'}>
          <Col>
            {
              moods ? <TaxonomyFilterList title="by mood" taxonomies={moods} /> : null
            }
            {
              instruments ? <TaxonomyFilterList title="by instrument" taxonomies={instruments} /> : null
            }
            {
              type ? <TaxonomyFilterList title="by type" taxonomies={type} /> : null
            }
          </Col>
          <Col>
            <TrackBox
              trackName="Please, don't stop the music"
              trackShortDescription="Tutaj będzie krótki opis kawałka, który nie zawsze będzie występował. Dam tutaj ograniczony boksik, czyli mały boks."
              trackTags={['happy', 'mysterious', 'happy', 'warm', 'happy', 'mysterious', 'happy', 'piano', 'happy', 'mysterious', 'happy', 'warm']}
            />
            <TrackBox
              trackName="Please, don't stop the music"
              trackShortDescription="Tutaj będzie krótki opis kawałka, który nie zawsze będzie występował. Dam tutaj ograniczony boksik, czyli mały boks."
              trackTags={['happy', 'mysterious', 'happy', 'warm', 'happy', 'mysterious', 'happy', 'piano', 'happy', 'mysterious', 'happy', 'warm']}
            />
            <TrackBox
              trackName="Please, don't stop the music"
              trackShortDescription="Tutaj będzie krótki opis kawałka, który nie zawsze będzie występował. Dam tutaj ograniczony boksik, czyli mały boks."
              trackTags={['happy', 'mysterious', 'happy', 'warm', 'happy', 'mysterious', 'happy', 'piano', 'happy', 'mysterious', 'happy', 'warm']}
            />
          </Col>
        </Row>
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