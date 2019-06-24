import React, { Component } from "react";
// import { Form, Button } from "react-bootstrap";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      university: "",
      age: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props
      .onAuth(authType, this.state)
      .then(() => this.props.history.push("/"))
      .catch(err => {});
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, username, university, age } = this.state;
    const { signUp, heading, buttonText } = this.props;
    return (
      <div className="text-center row justify-content-md-center authForm">
        <div className="col-md-6">
          <h2>{heading}</h2>
          <form
            className="border border-light p-5 authForm"
            onSubmit={this.handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="enter your username"
                name="username"
                onChange={this.handleChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="********"
                name="password"
                onChange={this.handleChange}
                value={password}
              />
            </div>
            {signUp && (
              <div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="age"
                    className="form-control"
                    placeholder="your age"
                    onChange={this.handleChange}
                    value={age}
                  />
                </div>
                <select
                  className="custom-select custom-select-lg"
                  onChange={this.handleChange}
                  value={university}
                  name="university"
                >
                  <option selected>Select Your university</option>
                  <option value="must">MUST</option>
                  <option value="msa">MSA</option>
                  <option value="miu">MIU</option>
                  <option value="bue">BUE</option>
                  <option value="auc">AUC</option>
                  <option value="guc">GUC</option>
                  <option value="cic">CIC</option>
                </select>
              </div>
            )}
            <div className="form-group">
              <button
                style={{ backgroundColor: "#004E9B" }}
                type="submit"
                className="btn btn-info my-4 btn-block"
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
