import React from 'react';

import styles from './SideDrawer.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary'

const sideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if(props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <Aux>
      <div className={attachedClasses.join(' ')}>
        <div className={styles.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
      <Backdrop
        closed={props.closed}
        show={props.open}/>
    </Aux>
  );
};

export default sideDrawer;
