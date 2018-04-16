import React from 'react';

import logoImg from '../../../assets/images/burger-logo.png';
import styles from './Logo.css';

const logo = (props) => (
  <div className={styles.Logo}>
    <img src={logoImg} alt="Logo"/>
  </div>
);

export default logo;