import React from 'react';
import styles from './Input.css';

const input = (props) => {

  let inputElement = null;
  const inputClasses = [styles.InputElement];
  let validationError = null;

  if(props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(styles.Invalid);
    validationError = <p
      className={styles.ValidationError}>
      Please enter a valid {props.config.typefield}!</p>;
  }

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
        className={inputClasses.join(' ')}
        value={props.value}
        onChange={props.changed}>
        {options}
      </select>;
    break;
    case ('input'):
      inputElement = <input className={inputClasses.join(' ')}
        {...props.config}
        value={props.value}
        onChange={props.changed}/>;
      break;
    case ('textarea'):
      inputElement = <textearea className={inputClasses.join(' ')}
        {...props.config}
        value={props.value}
        onChange={props.changed}></textearea>;
      break;
    default:
      inputElement = <input className={inputClasses.join(' ')}
        {...props.config}
        value={props.value}
        onChange={props.changed}/>;
  }
  
  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
