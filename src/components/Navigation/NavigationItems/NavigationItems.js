import React from 'react';

import styles from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/checkout">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;