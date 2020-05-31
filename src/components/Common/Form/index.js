import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "./../../../store/modules/Posts/actions";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    this.props.createPost({
      title: this.state.title,
      id: Date.now().toString(),
    });

    this.setState({ title: "" });
  };

  changeInputHandler = ({ target: { name, value } }) => {
    //event.persist(); - без деструктуризации ошибка
    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Сохранить
        </button>
      </form>
    );
  }
}

//объект или функция
//в пропс компонента добавить диспатч
const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(Form);
