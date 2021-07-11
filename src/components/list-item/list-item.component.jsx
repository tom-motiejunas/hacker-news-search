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
      <li className="container">
        <h3 className="title">Automated Hydroponic System Build (2020)</h3>
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
