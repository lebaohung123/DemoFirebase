import React, { Component } from "react";

class FormSua extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      content: this.props.content,
      title: this.props.title,
    };
  }

  isChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  saveButtonClick = (title, content) => {
    const newItem = {
      title: title,
      content: content,
    };
    this.props.onClick();
    this.props.saveButton(newItem);
  };
  hienFormProps = () => {
    if (this.props.trangthai) {
      return (
        <div class="col-sm-12">
          <div className="container mt-4 mb-5">
            <h4>Form Sua</h4>
            <form className="form-inline">
              <div className="form-group mr-2">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  name="title"
                  onChange={(e) => this.isChange(e)}
                  defaultValue={this.props.title}
                />
              </div>
              <div className="form-group mr-2">
                <input
                  type="text"
                  className="form-control"
                  id="inputMatKhau"
                  name="content"
                  onChange={(e) => this.isChange(e)}
                  defaultValue={this.props.content}
                />
              </div>
              <div className="form-group mr-2">
                <button
                  type="reset"
                  className="btn btn-primary"
                  onClick={(title, content) =>
                    this.saveButtonClick(this.state.title, this.state.content)
                  }
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  };

  render() {
    return this.hienFormProps();
  }
}

export default FormSua;
