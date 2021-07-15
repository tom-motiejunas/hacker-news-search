import React, { Component } from "react";
import "./list-item.style.css";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="stories-box">
        <a
          href={`https://news.ycombinator.com/item?id=${this.props.id}`}
          target="_blank"
          rel="noopener noreferrer" // Prevents security risks
        >
          <h3 className="title">{this.props.title}</h3>
          <div className="story-info-box">
            <span className="points">{this.props.score} points</span>
            <span className="author">{this.props.author}</span>
            <span className="time">
              <TimeAgo date={this.props.time * 1000}></TimeAgo>
            </span>
            <span className="comments">{this.props.comments} comments</span>
          </div>
        </a>
      </li>
    );
  }
}

export default ListItem;
