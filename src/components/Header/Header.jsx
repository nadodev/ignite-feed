import React from 'react'
import styles from './Header.module.css';

import igniteLogo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <div className={styles.header}>
        <img src={igniteLogo} alt="logotipo do ignite" />
        Ignite Feed
    </div>
  )
}
