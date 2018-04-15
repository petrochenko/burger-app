import React from 'react';

import styles from './Backdrop.css';

const backdrop = (props) => (
  props.show ? <div
    onClick={props.closed}
    className={styles.Backdrop}></div> : null
);

export default backdrop;