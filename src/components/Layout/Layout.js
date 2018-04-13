import React from 'react';

import Aux from '../../hoc/Auxiliary'

import styles from './Layout.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, Sidebar, Bacdrop</div>
    <main className={styles.Content}>{props.children}</main>
  </Aux>
);

export default layout;
