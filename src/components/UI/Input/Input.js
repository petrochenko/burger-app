import React from 'react';
import styles from './Input.css';

const input = (props) => {

  let inputElement = null;

  switch (props.elementType) {
    case ('select'):
      let options = props.config.options.map(option => (
        <option
          key={option.value}
          value={option.value}
          onChange={props.changed}>
          {option.displayedValue}
        </option>
      ));
      inputElement = <select
        className={styles.InputElement}
        value={props.value}
        onChange={props.changed}>
        {options}
      </select>;
    break;
    case ('input'):
      inputElement = <input className={styles.InputElement}
        {...props.config}
        value={props.value}
        onChange={props.changed}/>;
      break;
    case ('textarea'):
      inputElement = <textearea className={styles.InputElement}
        {...props.config}
        value={props.value}
        onChange={props.changed}></textearea>;
      break;
    default:
      inputElement = <input className={styles.InputElement}
        {...props.config}
        value={props.value}
        onChange={props.changed}/>;
  }
  
  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
