import React from 'react';

import styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'},
];

const buildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <div className={styles.Price}>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></div>
      {controls.map((ctrl, index) => <BuildControl
        key={ctrl+index}
        disabled={props.disabled[ctrl.type]}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)} />
      )}
      <div className={styles.OrderButtonWrap}>
        <button
          disabled={!props.purchasable}
          className={styles.OrderButton}>ORDER NOW</button>
      </div>
    </div>
  );
};

export default buildControls;

