import React, { Component } from "react";
import { dataNote } from "../connect";
import NoteItem from "./NoteItem";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";

export default class NoteList extends Component {
  //khai báo state để dùng được ở tất cả mọi nơi
  constructor(props, context) {
    super(props, context);
    this.state = { dataFirebase: [] };
  }
  //cwm
  componentWillMount() {
    onValue(dataNote, (snapshot) => {
      var arrayData = [];
      // const notes = snapshot.val();
      // console.log(notes);
      snapshot.forEach(function (childSnapshot) {
        var key = childSnapshot.key;
        var noteTitle = childSnapshot.val().noteTitle;
        var noteContent = childSnapshot.val().noteContent;
        // console.log(key);
        // console.log(noteTitle);
        // console.log(noteContent);
        arrayData.push({
          id: key,
          noteTitle: noteTitle,
          noteContent: noteContent,
        });
        //nằm trong onValue nên log được
        // console.log(arrayData);
      });
      this.setState({ dataFirebase: arrayData });
    });
  }

  //hàm lấy dữ liệu từ firebase
  getData = () => {
    //test xem dữ liệu có hay chưa
    // console.log(dataNote);
    //hàm đọc dữ liệu từng dòng là onValue

    //xảy ra bất đồng bộ
    // console.log(this.state.dataFirebase);
    if (this.state.dataFirebase) {
      return this.state.dataFirebase.map((value, key) => {
        return (
          <NoteItem
            key={key}
            i={key}
            noteTitle={value.noteTitle}
            noteContent={value.noteContent}
            id={value.id}
            deleteID={(id) => this.deleteID(id)}
            onClickEdit={() => this.props.onClick()}
            getDataForm={(title, content, id) =>
              this.props.getData(title, content, id)
            }
          />
        );
      });
    }
  };

  deleteID = (id) => {
    // console.log(id);
    const db = getDatabase();
    remove(ref(db, "note/" + id));
    // set(ref(db, "note/" + id), null);
  };

  render() {
    // console.log(this.state.dataFirebase);
    return (
      <div className="col-sm-9">
        <div id="accordianId" role="tablist" aria-multiselectable="true">
          {/* <NoteItem /> */}
          {this.getData()}
        </div>
      </div>
    );
  }
}
