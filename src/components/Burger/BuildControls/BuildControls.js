import React from 'react';

import styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
  {label: 'Salad', type: 'salad'},
];

const buildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      {controls.map((ctrl, index) => <BuildControl
        key={ctrl+index}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}/>
      )}
    </div>
  );
};

export default buildControls;

