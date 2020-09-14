import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './ProductList';
import Categories from './Categories';
import Header from './Header';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import * as api from '../services/api';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: '',
      categories: '',
      selectedCategory: '',
      cartProducts: [],
      count: 0,
      categoriesToggle: false,
    };
    this.textChange = this.textChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onSelectedOptionChange = this.onSelectedOptionChange.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
    this.removeProductToCart = this.removeProductToCart.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.toggleCategories = this.toggleCategories.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => this.setState({ categories }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedCategory, searchText } = this.state;
    if (prevState.selectedCategory !== this.state.selectedCategory) {
      api
        .getProductsFromCategoryAndQuery(selectedCategory, searchText)
        .then((products) => this.setState({ products }));
    }
  }

  toggleCategories() {
    this.setState({ categoriesToggle: !this.state.categoriesToggle });
    console.log(this.state.categoriesToggle);
  }

  onSelectedOptionChange(event) {
    this.setState({ selectedCategory: event.target.value });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  textChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    api
      .getProductsFromCategoryAndQuery(
        this.state.selectedCategory,
        this.state.searchText,
      )
      .then((products) => this.setState({ products }));
  }

  removeProductToCart(product) {
    let flagRemove = false;
    this.state.cartProducts.map((cartProduct, index) => {
      if (cartProduct.id === product.id) {
        if (product.quantity > 1) {
          const cartProducts = [...this.state.cartProducts];
          const cartProduct1 = {
            ...cartProducts[index],
            quantity: cartProducts[index].quantity - 1,
          };
          cartProducts[index] = cartProduct1;
          this.setState({ cartProducts });
        } else {
          flagRemove = index;
        }
      }
      return 2;
    });
    if (flagRemove === true) {
      this.state.cartProducts.splice(flagRemove, 1);
    }
  }

  addProductToCart(product) {
    let flagExist = false;
    this.state.cartProducts.map((cartProduct, index) => {
      const stockOk =
        cartProduct.selectedProduct.sold_quantity === cartProduct.quantity;
      // console.log("stockOk", stockOk);
      if (cartProduct.id === product.id && stockOk) {
        flagExist = true;
      }
      if (cartProduct.id === product.id) {
        flagExist = true;
        const cartProducts = [...this.state.cartProducts];
        const cartProduct1 = {
          ...cartProducts[index],
          quantity: cartProducts[index].quantity + 1,
        };
        cartProducts[index] = cartProduct1;
        this.setState({ cartProducts });
      }
      return flagExist;
    });
    if (flagExist === false) {
      const newProduct = {
        id: product.id,
        quantity: 1,
        selectedProduct: product,
      };
      this.setState((state) => {
        const cartProducts = [...state.cartProducts, newProduct];
        return { cartProducts };
      });
    }
  }

  renderCart() {
    const { cartProducts, count } = this.state;
    const { ...props } = this.props;

    return (
      <ShoppingCart
        {...props}
        cartProducts={cartProducts}
        count={count}
        onClickAdd={this.addProductToCart}
        onClickRemove={this.removeProductToCart}
        onclickIncrement={this.increment}
        onclickDecrement={this.decrement}
      />
    );
  }

  renderMainContent() {
    const { selectedCategory, products, categories } = this.state;

    return (
      <div className="maincontent">
        <div className="container-fluid bg-light d-bloc d-sm-none">
          <div className="col ">
            <button
              class="btn btn-primary btn-block"
              type="button"
              onClick={() => this.toggleCategories()}
            >
              Categories
            </button>
            {this.state.categoriesToggle && (
              <div className="row justify-content-center">
                <Categories
                  selectedCategory={selectedCategory}
                  categories={categories}
                  onChangeOption={this.onSelectedOptionChange}
                />
              </div>
            )}
            <div className="row">
              <ProductList
                products={products}
                onClickAdd={this.addProductToCart}
                onclickIncrement={this.increment}
              />
            </div>
          </div>
        </div>
        <div className="container-fluid bg-light d-none d-sm-block">
          <div className="row">
            <div className="col-2">
              <Categories
                selectedCategory={selectedCategory}
                categories={categories}
                onChangeOption={this.onSelectedOptionChange}
              />
            </div>
            <div className="col-10">
              <ProductList
                products={products}
                onClickAdd={this.addProductToCart}
                onclickIncrement={this.increment}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { products, cartProducts, count, searchText } = this.state;
    return (
      <Router>
        <div className="App">
          <Header
            count={count}
            searchText={searchText}
            textChange={this.textChange}
            onClickSearch={this.handleClick}
          />
          <Switch>
            <Route
              path="/ShoppingCart"
              render={(props) => this.renderCart(props)}
            />
            <Route
              path="/checkout"
              render={(props) => (
                <Checkout {...props} cartProducts={cartProducts} />
              )}
            />
            <Route
              exact
              path="/:id"
              render={(props) => (
                <ProductDetail
                  id={props.match.params.id}
                  product={props.location.test.product}
                  products={products}
                  onClickAdd={this.addProductToCart}
                  onclickIncrement={this.increment}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={(props) => this.renderMainContent(props)}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MainPage;
