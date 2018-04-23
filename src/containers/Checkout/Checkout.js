import React, {Component} from 'react';

import CheckoutSummury from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from "react-router-dom";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = +param[1];
        continue;
      }
      ingredients[param[0]] = +param[1];
    }
    this.setState({ingredients, price: price});
  }

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    let checkoutSummary = null;

    if (this.state.ingredients) {
      checkoutSummary = <CheckoutSummury
        checkoutCanceled={this.checkoutCanceledHandler}
        checkoutContinued={this.checkoutContinuedHandler}
        ingredients={this.state.ingredients}/>
    }

    return (
      <div>
        {checkoutSummary}
        <Route
          path={this.props.match.url + '/contact-data'}
          render={(props) => <ContactData
            price={this.state.price}
            ingredients={this.state.ingredients}
            {...props}/>}/>
      </div>

    );
  }
}

export default Checkout;