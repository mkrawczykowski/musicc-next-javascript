import React, { ReactNode } from 'react';
import styles from './Grid.module.scss';

const generateClassesFromProps = (classes) => {
    if (classes) {
        const splitClassesArray = classes.split(' ');
        let splitClassesString = '';

        splitClassesArray.map((splitClass) => {
            splitClassesString += ' ';
            splitClassesString += styles[splitClass];
        })

        return splitClassesString;
    }

    if (!classes) {
        return null;
    }
}

const Container = ({ children, classes }) => {
    return (
        <div className={[styles.container, generateClassesFromProps(classes)].join(' ')}>
            {children}
        </div>
    )
}

const Row = ({ children, classes }) => {
    return (
        <div className={[styles.row, generateClassesFromProps(classes)].join(' ')}>
            {children}
        </div>
    )
}

const Col = ({ children, classes }) => {
    return (
        <div className={[styles.col, generateClassesFromProps(classes)].join(' ')}>
            {children}
        </div>
    )
}

export { Container, Row, Col };