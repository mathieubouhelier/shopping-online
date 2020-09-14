import React, { Component } from 'react';
import './Categories.css';

class Categories extends Component {
  constructor() {
    super();
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(event) {
    this.props.onChangeOption(event);
  }

  render() {
    const { categories, selectedCategory } = this.props;
    if (categories === '') return 'Carregando...';
    return (
      <div>
        <h4 className="categories-title"> Categories</h4>
        <div>
          {categories.map((category) => (
            <div className="form-check" key={category.name}>
              <label class="form-check-label">
                <input
                  class="form-check-input form-check-input-categories"
                  data-testid="category"
                  type="radio"
                  value={category.id}
                  checked={selectedCategory === category.id}
                  onChange={this.onValueChange}
                />
                <span className="categories-font">{category.name}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Categories;
