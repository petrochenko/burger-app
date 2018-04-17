import React, {Component} from 'react';

import styles from './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentWillUpdate() {
    console.log('[Modal.js] WillUpdate')
  }

  render() {
    return (
      <Aux>
        <Backdrop
          closed={this.props.modalClosed}
          show={this.props.show}/>
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-150vh)',
            opacity: this.props.show ? '1' : '0',
          }}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
