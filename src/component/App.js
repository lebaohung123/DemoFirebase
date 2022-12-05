import "../App.css";
import { dataNote } from "../connect";
import Menu from "./Menu";
import NoteAdd from "./NoteAdd";
import NoteList from "./NoteList";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
  child,
  get,
  update,
} from "firebase/database";
import FormSua from "./FormSua";
import { useState } from "react";

const addData = (item) => {
  // console.log(item);
  push(dataNote, item);
};

function App() {
  const [formSua, setFormSua] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setID] = useState("");
  // const dbRef = ref(getDatabase());
  // get(child(dbRef, `note/`))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  const getData = (title, content, id) => {
    // console.log(title, content);
    setTitle(title);
    setContent(content);
    setID(id);
  };

  const doiTrangThai = () => {
    setFormSua(!formSua);
  };

  const saveButton = (item) => {
    const db = getDatabase();
    set(ref(db, "note/" + id), {
      noteTitle: item.title,
      noteContent: item.content,
    });
  };

  return (
    <div>
      <Menu />
      <div className="container">
        <div className="row">
          <FormSua
            trangthai={formSua}
            onClick={doiTrangThai}
            title={title}
            content={content}
            saveButton={(item) => saveButton(item)}
          />
          <NoteList
            onClick={doiTrangThai}
            getData={(title, content, id) => {
              getData(title, content, id);
            }}
          />
          <NoteAdd getData={(item) => addData(item)} />
        </div>
      </div>
    </div>
  );
}

export default App;
