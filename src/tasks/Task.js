import React, { Component } from 'react';

class Task extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state.text = props.info.description;
    this.state.editing = false;
    this.textClickHandler = this.textClickHandler.bind(this);
    this.saveClickHandler = this.saveClickHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  textClickHandler() {
    console.log('text click');
    this.setState({
      editing: true
    });
  }

  saveClickHandler() {
    console.log('save');
    this.setState({
      editing: false
    });
    this.props.editTaskHandler(this.props.info._id, this.state.text);
  }

  inputChangeHandler(event) {
    this.setState({text: event.target.value});
  }

  render() {
    let cardContent;

    if (this.state.editing) {
      cardContent = (
        <p className="card-text">
          <input onChange={this.inputChangeHandler} value={this.state.text} className="form-control mr-sm-2" type="text" />
        </p>
      );
    } else {
      cardContent = (
        <p className="card-text" onClick={this.textClickHandler}>
          {this.state.text}
        </p>
      );
    }

    let saveButton;

    if (this.state.editing) {
      saveButton = (<a href="#" onClick={this.saveClickHandler} className="btn btn-outline-success task-save-button">Сохранить</a>);
    }

    return (
        <div className="col col-12 col-md-6 col-lg-4">
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                  {cardContent}
                  <a href="#" onClick={(e) => {this.props.deleteTaskHandler(this.props.info._id)}} className="btn btn-danger">Удалить</a>
                  {saveButton}
                </div>
            </div>
        </div>
    );
  }
}

export default Task;