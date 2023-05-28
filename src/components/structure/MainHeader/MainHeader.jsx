import React, { useContext } from 'react';
import styles from './MainHeader.module.scss';
import { Container, Row } from '../Grid/Grid';
import { Context } from '../Context/Context';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import MainMenu from '../MainMenu/MainMenu';
import Hamburger from '../Hamburger/Hamburger';

const MainHeader = () => {
    const { state } = useContext(Context);
    const mainHeaderActive = state.mobileMenuActive ? styles.mainHeaderActive : null;
    return (
        <header className={[styles.mainHeader, mainHeaderActive].join(' ')}>
            <Container>
                <Row classes={'rowHeaderColumns'}>
                    <Search />
                    <Logo />
                    <Hamburger />
                    <MainMenu />
                </Row>
            </Container>
        </header>
    )
}

export default MainHeader;