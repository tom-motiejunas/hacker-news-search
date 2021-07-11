import React, { useState } from "react";

import "./list.component.css";

import ListItem from "../list-item/list-item.component";

import stories from "../../stories";

function returnPageArr(arr, page, perPage) {
  const startIndex = perPage * (page - 1);
  const endIndex = perPage * page;

  return arr.slice(startIndex, endIndex);
}

function List() {
  const [page, setPage] = useState(1);

  return (
    <ul className="list-box">
      {returnPageArr(stories, 1, 5).map((el) => (
        <ListItem
          key={el.id}
          author={el.by}
          score={el.score}
          time={el.time}
          title={el.title}
          comments={el.descendants}
        ></ListItem>
      ))}
    </ul>
  );
}

export default List;
