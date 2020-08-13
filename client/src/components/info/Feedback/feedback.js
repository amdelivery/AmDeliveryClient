import React, { Component } from "react";
import "./feedback.sass";
import "./feedback_mqueries.sass";
import { Link } from "react-router-dom";
import axios from "axios";

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackText: "",
      name: "",
    };
    this.getFeedbackName = this.getFeedbackName.bind(this);
    this.getFeedbackText = this.getFeedbackText.bind(this);
    this.sendFeedback = this.sendFeedback.bind(this);
  }

  getFeedbackText(e) {
    this.setState({
      feedbackText: e.target.value,
    });
  }

  getFeedbackName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  sendFeedback() {
    axios
      .post("/api/feedback", this.state)
      .then((res) => alert("Ваш отзыв успешно отправлен"))
      .then((result) => (document.location.href = "/"))
      .catch((err) => alert("Произошла ошибка"));
  }

  render() {
    return (
      <>
        <div className="feedback">
          <div className="feedback__document">
            <h1>Обратная связь</h1>
            <span>
              В поле ниже вы можете оставить свой комментарий по поводу работы
              нашего сервиса
            </span>
            <label htmlFor="name">Ваше Имя:</label>
            <input
              id="name"
              type="text"
              onChange={(e) => this.getFeedbackName(e)}
            />
            <label htmlFor="feedback">Ваш комментарий:</label>
            <textarea
              id="feedback"
              onChange={(e) => this.getFeedbackText(e)}
            ></textarea>
            <div className="feedback__btn-wrapper">
              <button
                className="feedback__send"
                onClick={(e) => this.sendFeedback()}
              >
                Отправить
              </button>
              <Link to="/">
                <button className="feedback__to-main-page">На главную</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Feedback;
