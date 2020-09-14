import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
import shop from './shop.png';
import SearchBar from './SearchBar';
import './Header.css';

class Header extends React.Component {
  render() {
    const { count, searchText } = this.props;
    return (
      <div className="navigation container-fluid py-3">
        <div className="row justify-content-around">
          <Link className="col align-self-center" to="/">
            <div className="text-center">
              <img src={Logo} alt="logo" />
            </div>
          </Link>
          <SearchBar
            className="col"
            searchText={searchText}
            textChange={this.props.textChange}
            onClickSearch={this.props.onClickSearch}
          />
          <Link
            className="shoppingCartLink col align-self-center"
            data-testid="shopping-cart-button"
            to="/ShoppingCart"
          >
            <div className="text-center">
              <img src={shop} alt="shoppingCart" />
              {/* <p data-testid="shopping-cart-size">{count}</p> */}
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
