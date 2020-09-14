import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
  const { product, clickToAdd } = props;
  return (
    <div className="card card-custom mx-2 mb-3" style={{ width: '18rem' }}>
      <div className="card-body" data-testid="product" key={product.id}>
        <img
          className="card-img-top"
          src={product.thumbnail}
          alt={product.title}
        />
        <div class="card-body">
          <h2 className="card-title">R$ {product.price}</h2>
          <h6 className="card-subtitle">{product.title}</h6>
          {/* <p className="card-text">{product.id}</p> */}
          {product.shipping.free_shipping && (
            <p className="card-text" data-testid="free-shipping">
              {product.shipping.free_shipping}
            </p>
          )}
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              class="btn btn-primary"
              type="button"
              data-testid="product-add-to-cart"
              onClick={() => clickToAdd(product)}
            >
              Add to Cart
            </button>
            <Link
              class="btn btn-primary"
              data-testid="product-detail-link"
              to={{ pathname: `./${product.id}`, test: { product } }}
            >
              Detalhe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
// http://mlb-s1-p.mlstatic.com/745300-MLA41632030479_052020-I.jpg
// https://http2.mlstatic.com/D_NQ_NP_745300-MLA41632030479_052020-W.webp
