import React, {Component} from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
  // todo this as functional component
  componentWillUpdate() {
    console.log('[OrderSummary.js] WillUpdate')
  }

  render() {
    const ingredientSummury = Object.keys(this.props.ingredients)
      .map((ingKey, index) => {
        return <li key={ingKey + index}><span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {this.props.ingredients[ingKey]}</li>;
      });
    return (
      <Aux>
        <h3>You Order</h3>
        <p>A burger with the following ingredients:</p>
        <ul>
          {ingredientSummury}
        </ul>
        <p>Continue to Checkout?</p>
        <p>Total price: <strong>{this.props.totalPrice.toFixed(2)}</strong></p>
        <Button btnType="Danger"
                clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success"
                clicked={this.props.purchaseContinued}>CONTINUE</Button>

      </Aux>
    );
  }
};

export default OrderSummary;