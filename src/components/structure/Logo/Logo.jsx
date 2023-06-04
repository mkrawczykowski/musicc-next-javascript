import React from 'react';
import Image from 'next/image';
import logoImage from '../../../../public/images/logo-krawczykowski@2x.png';
import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <p className={styles.logo__text}>krawczykowski</p>
        </div>
    )
}

export default Logo;