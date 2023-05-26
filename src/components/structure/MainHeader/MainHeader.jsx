import React, { useContext, useState, useRef } from 'react';
import styles from './MainHeader.module.scss';
import { Container } from '../Grid/Grid';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import MainMenu from '../MainMenu/MainMenu';
import Hamburger from '../Hamburger/Hamburger';
import Context from '../Store/Store';

const MainHeader = () => {
    return (
        <div className={styles.mainHeader}>
            <Container>
                <Logo />
                <MainMenu />
                <Search />
                <Hamburger />
            </Container>
        </div>
    )
}

export default MainHeader;