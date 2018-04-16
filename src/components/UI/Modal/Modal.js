import React from 'react';

import styles from './Modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Aux>
    <Backdrop
      closed={props.modalClosed}
      show={props.show} />
    <div
      className={styles.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-150vh)',
        opacity: props.show ? '1' : '0',
      }}>
      {props.children}
    </div>
  </Aux>
);

export default modal;
