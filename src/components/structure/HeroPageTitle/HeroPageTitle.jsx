import React from 'react';
import style from './HeroPageTitle.module.scss';
import { Container, Col } from '../Grid/Grid';
import HeadingSubheading from '../../content/HeadingSubheading/HeadingSubheading';
import Image from 'next/image';
import headerIconPlay from '../../../../public/images/play-icon.svg';
import headerIconNote from '../../../../public/images/note-icon.svg';

const HeroPageTitle = () => {
  return (
    <section className={style.heroPageTitle}>
      <Container classes="containerSecondColumnNarrow">
        <Col>
          <HeadingSubheading
            mainHeadingType="h1"
            secondaryHeadingType="h2"
            mainHeadingString="Free music"
            secondaryHeadingString="(Creative Commons)" />
        </Col>
        <Col classes="pageTitleIcons">
          <Image src={headerIconPlay} alt="" />
          <Image src={headerIconNote} alt="" />
        </Col>
      </Container>
    </section>
  )
}

export default HeroPageTitle;