import { getDatabase, onValue, push, ref } from "firebase/database";
import "./App.css";
import Menu from "./components/Menu";
import NoteAdd from "./components/NoteAdd";
import NoteList from "./components/NoteList";
import { dataNote } from "./connect";

const addData = (item) => {
  // console.log(item);   
  push(dataNote, item);
};

function App() {
  // console.log(connect);
  // console.log(dataNote);
  // const db = getDatabase();
  // const data = ref(db, 'note/');
  // onValue(data, (snapshot) => {
  //   const data = snapshot.val();
  //   console.log(data);
  // });

  return (
    <div>
      <Menu />
      <div className="container">
        <div className="row">
          <NoteList />
          <NoteAdd getData={(item) => addData(item)} />
        </div>
      </div>
    </div>
  );
}

export default App;
