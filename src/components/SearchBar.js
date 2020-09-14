import React, { Component } from 'react';
// import 'font-awesome/css/font-awesome.min.css';

class SearchBar extends Component {
  render() {
    const { searchText, textChange, onClickSearch } = this.props;
    return (
      <div>
        <div class="row">
          <div class="col-sm-15">
            <div class="input-group">
              <input
                data-testid="query-input"
                type="text"
                maxlength="120"
                class="form-control"
                placeholder="Search..."
                name="searchText"
                value={searchText}
                onChange={textChange}
              />
              <div class="input-group-append">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={onClickSearch}
                  data-testid="query-button"
                >
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
