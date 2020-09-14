import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';

class ShoppingCart extends Component {
  constructor(props) {

    super(props);
    this.state = {
      cartProducts: [],
      count: 0,
    };
    this.addProductToCart = this.addProductToCart.bind(this);
    this.removeProductToCart = this.removeProductToCart.bind(this);
    this.cartRender = this.cartRender.bind(this);
  }

  addProductToCart(product) {
    this.props.onClickAdd(product);
    this.props.onclickIncrement();
  }

  removeProductToCart(product) {
    this.props.onClickRemove(product);
    this.props.onclickDecrement();
  }

  cartRender() {
    const { cartProducts } = this.props;

    return (
      <div className="container bg-white ">
        {cartProducts.map((product) => (
          <div
            className="row align-items-center justify-content-end rounded border-bottom m-3"
            data-testid="shopping-cart-product-name"
            key={product.id}
          >
            <img
              className="img-responsive"
              src={product.selectedProduct.thumbnail}
              alt={product.title}
            />
            {/* <p>{product.id}</p> */}
            <h5 className="col m-2">
              {product.selectedProduct.title}
            </h5>
            <div className="col">
              <div className="input-group mb-3 justify-content-end">
                <div class="btn-group" role="group" aria-label="detail-buttons">
                  <button
                    className="btn btn btn-outline-primary"
                    type="button"
                    data-testid="product-decrease-quantity"
                    onClick={() => this.removeProductToCart(product)}
                  >
                    -
                  </button>
                  <button
                    class="btn btn-outline-primary"
                    disabled
                    data-testid="shopping-cart-product-quantity"
                  >
                    {product.quantity}
                  </button>
                  <button
                    className="btn btn btn-outline-primary"
                    type="button"
                    data-testid="product-increase-quantity"
                    onClick={() => this.addProductToCart(product)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    if (this.props.count === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div className="container-fluid vh-100 bg-light p-4 m-0">
      <div className="container bg-white ">
        <this.cartRender />
        <Link data-testid="checkout-products" to="/checkout">
          <button className="btn btn-primary m-4" type="button">
            Checkout
          </button>
        </Link>
      </div>
      </div>
    );
  }
}

export default ShoppingCart;
