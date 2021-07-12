import React, { useState, useEffect } from "react";

import "./list.component.css";

import ListItem from "../list-item/list-item.component";
import SearchNav from "../search-nav/search-nav.component";

const getStories = async function (arr) {
  try {
    const userStories = await Promise.all(
      arr.map(async (el) => {
        const request = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${el}.json?print=pretty`
        );
        const data = await request.json();
        return data;
      })
    );
    return userStories;
  } catch (err) {
    console.log(err);
  }
};

async function returnPageArr(arr, page, perPage) {
  const startIndex = perPage * (page - 1);
  const endIndex = perPage * page;
  return await getStories(arr.slice(startIndex, endIndex));
}

async function pageNum(arr, perPage) {
  const data = await arr;
  return Math.ceil(data.length / perPage);
}

async function returnListItems(stories, setItems, page) {
  const data = await stories;
  const pageData = await returnPageArr(data, page, 20);

  setItems(
    pageData.map((el) => (
      <ListItem
        key={el.id}
        author={el.by}
        score={el.score}
        time={el.time}
        title={el.title}
        comments={el.descendants}
      ></ListItem>
    ))
  );
}

function List({ stories, setStor }) {
  const [page, setPage] = useState(1);
  let [pageItems, setItems] = useState([]);
  useEffect(() => {
    return returnListItems(stories, setItems, page);
  }, [page]);

  return (
    <section>
      <ul className="list-box">{pageItems.map((el) => el)}</ul>
      <SearchNav
        page={page}
        pageNum={pageNum(stories, 15)}
        pageFunc={setPage}
      ></SearchNav>
    </section>
  );
}
export default List;
