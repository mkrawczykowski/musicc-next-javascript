import React from 'react';
import styles from './Footer.module.scss';
import { Container, Col } from '../Grid/Grid';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Col>
          <div className={styles.footer__content}>
            <p>music and coding Michał Krawczykowski</p>
            <p>design by Paulina Lara</p>
          </div>
        </Col>
      </Container>
    </footer>
  )
}

export default Footer;