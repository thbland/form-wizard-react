import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

class CheckoutFormPersonal extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (evt) => this.setState({ [field]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Personal info</h3>
        <input
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={this.handleChange("name")}
        />
        <input
          type="text"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleChange("email")}
        />

        <button>Next</button>
      </form>
    );
  }
}

class CheckoutFormShipping extends React.Component {
  constructor() {
    super();
    this.state = {
      shipping_line: "",
      shipping_city: "",
      shipping_zip: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (evt) => this.setState({ [field]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Shipping</h3>
        <input
          type="text"
          placeholder="Address line"
          value={this.state.shipping_line}
          onChange={this.handleChange("shipping_line")}
        />
        <input
          type="text"
          placeholder="City"
          value={this.state.shipping_city}
          onChange={this.handleChange("shipping_city")}
        />
        <input
          type="text"
          placeholder="ZIP"
          value={this.state.shipping_zip}
          onChange={this.handleChange("shipping_zip")}
        />

        <button>Next</button>
      </form>
    );
  }
}

class CheckoutFormBilling extends React.Component {
  constructor() {
    super();
    this.state = {
      billing_line: "",
      billing_city: "",
      billing_zip: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (evt) => this.setState({ [field]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Billing</h3>
        <input
          type="text"
          placeholder="Address line"
          value={this.state.billing_line}
          onChange={this.handleChange("billing_line")}
        />
        <input
          type="text"
          placeholder="City"
          value={this.state.billing_city}
          onChange={this.handleChange("billing_city")}
        />
        <input
          type="text"
          placeholder="ZIP"
          value={this.state.billing_zip}
          onChange={this.handleChange("billing_zip")}
        />

        <button>Checkout</button>
      </form>
    );
  }
}

class CheckoutForm extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1
    };
    this.goToNext = this.goToNext.bind(this);
  }

  goToNext() {
    const { step } = this.state;
    if (step !== 3) {
      this.setState({ step: step + 1 });
    } else {
      alert("Submitting");
    }
  }

  render() {
    switch (this.state.step) {
      case 1:
        return <CheckoutFormPersonal key="personal" onSubmit={this.goToNext} />;
      case 2:
        return <CheckoutFormShipping key="shipping" onSubmit={this.goToNext} />;
      case 3:
        return <CheckoutFormBilling key="billing" onSubmit={this.goToNext} />;
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CheckoutForm />, rootElement);
