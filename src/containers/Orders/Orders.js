import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        const orders = [];
        for(let order in res.data) {
          let newOrder = Object.assign(res.data[order], {orderId: order})
          orders.push(newOrder);
        }
        console.log(orders);
        this.setState({
          orders: orders,
          loading: false
        });
      })
      .catch(error => {
      console.error(error);
      this.setState({error: true, loading: false});
    });
  }

  render() {
    let orders = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner/>;
    if(!this.state.loading && !this.state.error) {
      orders = this.state.orders.map(order => <Order
        key={order.orderId}
        ingredients={order.ingredients}
        price={order.price}/>);
    }
    return (
      <div>
        {orders}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);