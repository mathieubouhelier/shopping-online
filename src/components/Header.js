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
      <div className="nav">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <SearchBar
          searchText={searchText}
          textChange={this.props.textChange}
          onClickSearch={this.props.onClickSearch}
        />
        <Link
          className="shoppingCartLink"
          data-testid="shopping-cart-button"
          to="/ShoppingCart"
        >
          <img src={shop} alt="shoppingCart" />
          <p data-testid="shopping-cart-size">{count}</p>
        </Link>
      </div>
    );
  }
}

export default Header;
