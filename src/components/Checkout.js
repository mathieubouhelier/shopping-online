import React from 'react';
import CheckoutProductsList from './CheckoutProductsList';
import CheckoutForm from './CheckoutForm';
import './Checkout.css';

class Checkout extends React.Component {
  render() {
    const { cartProducts } = this.props;
    return (
      <div className="container-fluid vh-100 bg-light pr-0">
        <div className="container-fluid h-100 bg-light d-none d-sm-block">
          <div className="row justify-content-center h-100">
            <div className="col-8 pl-5 ">
              {/* <div className="row justify-content-center ">
              <div className="col"> */}

                <p>Checkout</p>
                <CheckoutForm />
              </div>
            {/* </div>
            </div> */}
            <div className="col-4 checkoutProdListContainer h-100 ">
              <CheckoutProductsList cartProducts={cartProducts} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
