import React, { Component } from "react";
// import { Form, Button } from "react-bootstrap";

class TeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      githupRepo: "",
      imageUrl: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props
      .onTeamCreation(this.state)
      .then(() => this.props.history.push("/"))
      .catch(err => {});
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { name, imageUrl, githupRepo} = this.state;
    return (
      <div className="text-center row justify-content-md-center authForm">
        <div className="col-md-6">
          <h2>Create New Team</h2>
          <form
            className="border border-light p-5 authForm"
            onSubmit={this.handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="enter your username"
                name="name"
                onChange={this.handleChange}
                value={name}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="github repo URL"
                name="githupRepo"
                onChange={this.handleChange}
                value={githupRepo}
              />
            </div>
              <div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter image url"
                    name="imageUrl"
                    onChange={this.handleChange}
                    value={imageUrl}
                  />
                </div>
              </div>
            <div className="form-group">
              <button
                style={{ backgroundColor: "#004E9B" }}
                type="submit"
                className="btn btn-info my-4 btn-block"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TeamForm;
