import React, { Component } from 'react';
import RateProduct from './RateProduct';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  addProductToCart(product) {
    this.props.onClickAdd(product);
    this.props.onclickIncrement();
  }

  render() {
    if (this.props.products.length === 0) {
      return <p>No Details</p>;
    }
    const { title, price, thumbnail, attributes } = this.props.product;

    return (
      <div className="container-fluid vh-100 bg-light pr-0">
      <div className="container">
        <div className="col justify-content-center text-center pt-5">
          <h2 data-testid="product-detail-name">{title}</h2>
          <img className="m-3" src={thumbnail} alt={title} />
          <h2 className="mx-auto">R${price}</h2>
          <button
            className="btn btn-primary m-4"
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={() => this.addProductToCart(this.props.product)}
          >
            Add this item to Cart
          </button>
          {/* <h3 className="mt-6"  >Especificações Técnicas</h3>
            <p>{attributes[0].value_name}</p>
            <p>{attributes[1].value_name}</p> */}
        </div>
        <RateProduct />
      </div>
      </div>
    );
  }
}

export default ProductDetail;
