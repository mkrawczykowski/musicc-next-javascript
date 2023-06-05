import React from 'react';
import style from './HeroPageTitle.module.scss';
import { Container, Row, Col } from '../Grid/Grid';
import HeadingSubheading from '../../content/HeadingSubheading/HeadingSubheading';
import Image from 'next/image';
import headerIconPlay from '../../../../public/images/play-icon.svg';
import headerIconNote from '../../../../public/images/note-icon.svg';

const HeroPageTitle = () => {
  return (
    <section className={style.heroPageTitle}>
      <Container>
        <Row classes="rowSecondColumnNarrow">
          <Col>
            <HeadingSubheading
              mainHeadingType="h1"
              secondaryHeadingType="h2"
              mainHeadingString="Free CC music"
              secondaryHeadingString={`produced by professional web developer + non-professional music producer`} />
          </Col>
          <Col classes="pageTitleIcons">
            <Image src={headerIconPlay} alt="" />
            <Image src={headerIconNote} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroPageTitle;