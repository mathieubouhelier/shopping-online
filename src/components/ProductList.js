import React from 'react';
import Product from '../components/Product';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.clickToAdd = this.clickToAdd.bind(this);
  }

  clickToAdd(product) {
    this.props.onClickAdd(product);
    this.props.onclickIncrement();
  }

  render() {
    const { products } = this.props;
    if (products === '') return 'Carregando Produto liste...';
    return (
      <div>
           <div className="container">
            <div className="row mt-5 justify-content-center">

            {products.results.map((product) => (
              <Product product={product} clickToAdd={this.clickToAdd} />
              ))}
              </div>
          </div>
        </div>
    );
  }
}

export default ProductList;
