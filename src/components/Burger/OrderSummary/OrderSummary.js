import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummury = Object.keys(props.ingredients)
    .map((ingKey, index) => {
      return <li key={ingKey + index}><span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}</li>;
    });
  return (
    <Aux>
      <h3>You Order</h3>
      <p>A burger with the following ingredients:</p>
      <ul>
        {ingredientSummury}
      </ul>
      <p>Continue to Checkout?</p>
      <p>Total price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
      <Button btnType="Danger"
              clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success"
              clicked={props.purchaseContinued}>CONTINUE</Button>

    </Aux>
  );
};

export default orderSummary;