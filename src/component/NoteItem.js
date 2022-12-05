import { onValue } from "firebase/database";
import React, { Component } from "react";
import { dataNote } from "../connect";

export default class NoteItem extends Component {
  // constructor(props, context) {
  //   super(props, context);
  //   this.state = { id: this.props.id };
  // }

  deleteItem = (itemID) => {
    this.props.deleteID(itemID);
  };

  buttonEdit = (noteTitle, noteContent, id) => {
    this.props.onClickEdit();
    this.props.getDataForm(noteTitle, noteContent, id);
  };
  render() {
    return (
      <div className="card">
        <div className="card-header" role="tab" id="note1">
          <div className="row">
            <div className="col-sm-10">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  data-parent="#accordianId"
                  href={"#abc" + this.props.i}
                  aria-expanded="true"
                  aria-controls="noteContent1"
                >
                  {this.props.noteTitle}
                </a>
              </h5>
            </div>
            <div className="col-sm-2">
              <div
                className="btn btn-info"
                onClick={() =>
                  this.buttonEdit(this.props.noteTitle, this.props.noteContent, this.props.id)
                }
              >
                Sửa
              </div>
              <div
                className="btn btn-danger"
                onClick={() => this.deleteItem(this.props.id)}
              >
                Xóa
              </div>
            </div>
            {/* vì id bắt đầu bằng số k đc, nên gắn thêm chuỗi ở trc */}
            <div
              id={"abc" + this.props.i}
              className="collapse in"
              role="tabpanel"
              aria-labelledby="note1"
            >
              <div className="card-body">{this.props.noteContent}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
