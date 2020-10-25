import React, { Component } from "react";

class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // manv: "",
      // tennv: "",
      // email: "",
      values: { manv: "", tennv: "", email: "" },
      errors: { manv: "", tennv: "", email: "" },
      formValid: false,
      manvValid: false,
      tennvValid: false,
      emailValid: false,
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        values: { ...this.state.values, [name]: value },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleError = (e) => {
    const { name, value } = e.target;
    // console.log(nanme, value);
    let mess = value === "" ? name + " khong duoc rong" : "";
    // console.log(mess);
    let { manvValid, tennvValid, emailValid } = this.state;

    switch (name) {
      case "manv":
        manvValid = mess !== "" ? false : true;
        if (value && value.length < 4) {
          manvValid = false;
          mess = "Do dai ki tu phai lon hon 3";
        }
        break;
      case "tennv":
        tennvValid = mess !== "" ? false : true;
        break;
      case "email":
        emailValid = mess !== "" ? false : true;
        if (value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          emailValid = false;
          mess = "Email khong dung";
        }
        break;
      default:
        break;
    }

    this.setState(
      {
        errors: { ...this.state.errors, [name]: mess },
        manvValid,
        tennvValid,
        emailValid,
      },
      () => {
        console.log(this.state);
        this.handleFormValid();
      }
    );
  };

  handleFormValid = () => {
    const { manvValid, tennvValid, emailValid } = this.state;
    this.setState({
      formValid: manvValid && tennvValid && emailValid,
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="title">*FormValidation</h3>
        <form>
          <div className="form-group">
            <label>Ma Nhan Vien</label>
            <input
              type="text"
              className="form-control"
              name="manv"
              onChange={this.handleOnChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />
            {this.state.errors.manv !== "" ? (
              <div className="alert alert-danger">{this.state.errors.manv}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Ten Nhan Vien</label>
            <input
              type="text"
              className="form-control"
              name="tennv"
              onChange={this.handleOnChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />
          </div>
          {this.state.errors.tennv !== "" ? (
            <div className="alert alert-danger">{this.state.errors.tennv}</div>
          ) : (
            ""
          )}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleOnChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />
          </div>
          {this.state.errors.email !== "" ? (
            <div className="alert alert-danger">{this.state.errors.email}</div>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="btn btn-success"
            disabled={!this.state.formValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormValidation;
