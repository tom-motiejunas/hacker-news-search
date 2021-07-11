import React, { Component } from "react";
import "./list-item.component.css";

class ListItem extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     title: props.title,
    //     points: props.score,
    //     time: props.time,
    //     author: props.author,
    // };
  }

  render() {
    return (
      <li className="stories-box">
        <h3 className="title">{this.props.title}</h3>
        <div>
          <span className="points">{this.props.score} points</span>
          <span className="author">{this.props.author}</span>
          <span className="time">{this.props.time}</span>
          <span className="comments">{this.props.comments} comments</span>
        </div>
      </li>
    );
  }
}

export default ListItem;
