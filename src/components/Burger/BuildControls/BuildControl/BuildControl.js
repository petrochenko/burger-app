import React from 'react';

import styles from './BuildControl.css';

const buildControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button
        onClick={props.removed}
        disabled={props.disabled}
        className={styles.Less}>Less</button>
      <button
        onClick={props.added}
        className={styles.More}>More</button>
    </div>
  );
};

export default buildControl;
