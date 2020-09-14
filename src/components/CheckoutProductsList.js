import React from 'react';

class CheckoutProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: [{ selectedProduct: { installments: { amount: 0 } } }],
      // totalPrice: 0,
    };
    this.totalPriceSum = this.totalPriceSum.bind(this);
  }

  totalPriceSum() {
    let totalPrice = 0;
    const { cartProducts } = this.props;
    if (cartProducts.length > 0) {
      // console.log('inside totalprice cartProducts', cartProducts);
      cartProducts.map((product) => {
        totalPrice += product.selectedProduct.price * product.quantity;
        return totalPrice;
      });
    }
    return totalPrice;
  }

  render() {
    const { cartProducts } = this.props;
    this.totalPriceSum();
    // let count = 0;
    return (
      <div className="container">
        {cartProducts.map((product) => (
          // (count = count + 1),
          // console.log('count', count),
          <div className="row align-items-center my-3" key={product.id}>
            <img
              className="img-fluid rounded-circle pr-4"
              src={product.selectedProduct.thumbnail}
              alt={product.title}
            />
            <div className="col">
              <p className="row small mb-0">{product.selectedProduct.title}</p>
              <p className="row small text-center font-weight-light mb-0">
                quantity: {product.quantity}
              </p>
              <p className="row small text-center font-weight-light mb-0">
                Price: {product.selectedProduct.price}{' '}
                {product.selectedProduct.currency_id}
              </p>
            </div>
          </div>
        ))}
        <div className="row border-top ">
          <h5 className="col p-3 font-weight-light">Total </h5>
          <h5 className="col text-nowrap p-3 font-weight-light">
            R$ {this.totalPriceSum().toFixed(2)}
          </h5>
        </div>
      </div>
    );
  }
}

export default CheckoutProductsList;
