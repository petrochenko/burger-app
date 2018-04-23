import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner'
import styles from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipcode: ''
    },
    loading: false
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Sergey Petrochenko',
        email: 'mail.petrochenko@gmail.com',
        address: {
          street: 'Genkinoy',
          zipcode: '603012',
          country: 'Russia',
        }
      },
      deliveryMethod: 'fastest'
    };
    axios.post('/orders.json', order)
      .then(response => {
        console.log(response);
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        console.error(error);
        this.setState({loading: false});
      });
  };

  render() {
    let form = (
      <form>
        <input className={styles.Input} type="text" name="name" placeholder="Your Name"/>
        <input className={styles.Input} type="email" name="email" placeholder="Your Email"/>
        <input className={styles.Input} type="text" name="street" placeholder="Your Street"/>
        <input className={styles.Input} type="text" name="zipcode" placeholder="Your Zipcode"/>
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );

    if(this.state.loading) {
      form = <Spinner/>;
    }

    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
