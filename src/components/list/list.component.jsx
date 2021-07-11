import React, { useState } from "react";

import "./list.component.css";

import ListItem from "../list-item/list-item.component";
import SearchNav from "../search-nav/search-nav.component";

import stories from "../../stories";

function returnPageArr(arr, page, perPage) {
  const startIndex = perPage * (page - 1);
  const endIndex = perPage * page;
  return arr.slice(startIndex, endIndex);
}

function pageNum(arr, perPage) {
  return Math.ceil(arr.length / perPage);
}

function List() {
  const [page, setPage] = useState(1);

  return (
    <section>
      <ul className="list-box">
        {returnPageArr(stories, page, 5).map((el) => (
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
      <SearchNav
        page={page}
        pageNum={pageNum(stories, 5)}
        pageFunc={setPage}
      ></SearchNav>
    </section>
  );
}

export default List;
