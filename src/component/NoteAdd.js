import React, { Component } from 'react'

export default class NoteAdd extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            noteTitle:'',
            noteContent:''
        }
    }
    //hàm lấy thông tin
    isChange=(event) =>{
        const name=event.target.name;
        const value=event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({[name]:value})
    }
    //hàm đẩy thông tin đi
    addData=(noteTitle, noteContent) =>{
        var item={};
        item.noteTitle=noteTitle;
        item.noteContent=noteContent;
        // console.log(item);
        //khi click vào nút sẽ gọi hàm này
        this.props.getData(item);
    }
  render() {
    return (
        <div className="col-sm-3">
        <form>
        <h3>Quản lý Note</h3>
        <div className="form-group">
          <label htmlFor="noteTitle">Tiêu đề Note</label>
          <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpId" placeholder="Tiêu đề Note" />
        </div>
        <div className="form-group">
          <label htmlFor="noteContent">Nội dung Note</label>
          <textarea onChange={(event) => this.isChange(event)} className="form-control" name="noteContent" id="noteContent" rows={3} defaultValue={""} />
        </div>
        
        <button onClick={() =>this.addData(this.state.noteTitle,this.state.noteContent)} type="reset" className="btn btn-primary btn-block">Lưu</button>
        </form>
      </div>
      
    )
  }
}
