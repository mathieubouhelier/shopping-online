import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.nameFormRender = this.nameFormRender.bind(this);
    this.phoneFormRender = this.phoneFormRender.bind(this);
    this.CEPFormRender = this.CEPFormRender.bind(this);
    this.adressFormRender = this.adressFormRender.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  // }

  nameFormRender() {
    return (
      <input
        name="name"
        data-testid="checkout-fullname"
        type="text"
        value={this.state.name}
        onChange={this.handleChange}
        className="form-control"
        placeholder="First name"
      />
    );
  }

  phoneFormRender() {
    return (
      <input
        className="form-control"
        name="phone"
        data-testid="checkout-phone"
        type="text"
        value={this.state.phone}
        onChange={this.handleChange}
        placeholder="Phone"
      />
    );
  }

  CEPFormRender() {
    return (
      // <label htmlFor="cep">
      //   CEP :
      //   </label>
      <input
        className="form-control"
        name="CEP"
        data-testid="checkout-cep"
        type="text"
        value={this.state.CEP}
        onChange={this.handleChange}
        placeholder="CEP"
      />
    );
  }

  adressFormRender() {
    return (
      <textarea
        className="form-control"
        name="adress"
        data-testid="checkout-address"
        type="text area"
        value={this.state.adress}
        onChange={this.handleChange}
        placeholder="Address"
      />
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <this.nameFormRender />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            data-testid="checkout-email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="cpf"
            data-testid="checkout-cpf"
            type="text"
            value={this.state.cpf}
            onChange={this.handleChange}
            placeholder="CPF"
          />
        </div>
        <div className="form-group">
          <this.phoneFormRender />
        </div>
        <div className="form-group">
          <this.CEPFormRender />
        </div>

        <div className="form-group">
          <this.adressFormRender />
        </div>
          <div className="form-inline">
        <div className="form-check mr-3">
          <input
            className="form-check-input position-static"
            type="radio"
            name="blankRadio"
            id="visa"
            value="visa"
            aria-label="..."
          />
          <i className="fa fa-cc-visa fa-3x pl-2" style={{ color: '#007bff' }}></i>
        </div>
        <div className="form-check mr-3">
          <input
            className="form-check-input position-static"
            type="radio"
            name="blankRadio"
            id="amex"
            value="amex"
            aria-label="..."
            />
          <i className="fa fa-cc-amex fa-3x pl-2" style={{ color: '#007bff' }}></i>
        </div>
        <div className="form-check">
          <input
            className="form-check-input position-static"
            type="radio"
            name="blankRadio"
            id="mastercard"
            value="mastercard"
            aria-label="..."
            />
          <i className="fa fa-cc-mastercard fa-3x pl-2" style={{ color: '#007bff' }}></i>
        </div>
            </div>
        <button type="submit" value="Send" className="btn btn-primary mt-4">
          Send
        </button>
      </form>
    );
  }
}

export default CheckoutForm;
