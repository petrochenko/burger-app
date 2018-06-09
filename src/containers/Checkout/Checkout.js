import React, {Component} from 'react';

import CheckoutSummury from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from "react-router-dom";
import {connect} from 'react-redux';

class Checkout extends Component {

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    let checkoutSummary = null;

    if (this.props.ingredients) {
      checkoutSummary = <CheckoutSummury
        checkoutCanceled={this.checkoutCanceledHandler}
        checkoutContinued={this.checkoutContinuedHandler}
        ingredients={this.props.ingredients}/>
    }

    return (
      <div>
        {checkoutSummary}
        <Route
          path={this.props.match.url + '/contact-data'}
          component={ContactData}/>}/>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    price: state.totalPrice,
    ingredients: state.ingredients
  }
};

export default connect(mapStateToProps)(Checkout);