import React, { Component } from 'react';
// import 'font-awesome/css/font-awesome.min.css';

class SearchBar extends Component {
  render() {
    const { searchText, textChange, onClickSearch } = this.props;
    return (
      <div>
        {/* <input
          data-testid="query-input"
          type="text"
          placeholder="Digite o que você quer encontrar"
          maxlength="120"
          name="searchText"
          value={searchText}
          onChange={textChange}
        />
        <button
          type="button"
          onClick={onClickSearch}
          data-testid="query-button"
        >
          buscar
        </button> */}


     
          <div class="row">
            <div class="col-sm-15">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
                <div class="input-group-append">
                  <button type="button" class="btn btn-secondary">
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
