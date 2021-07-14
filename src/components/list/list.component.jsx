import React, { useState, useEffect } from "react";

import "./list.style.css";

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

async function pageNum(arr, perPage, setPageAmount) {
  const data = await arr;
  setPageAmount(Math.ceil(data.length / perPage));
  return Math.ceil(data.length / perPage);
}

async function returnListItems(stories, setItems, page) {
  const data = await stories;
  const pageData = await returnPageArr(
    data,
    page,
    localStorage.getItem("storiesPerPage")
  );

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

function List({ stories }) {
  const [page, setPage] = useState(1);
  let [pageItems, setItems] = useState([]);
  const [pageAmount, setPageAmount] = useState(1);

  useEffect(() => {
    return returnListItems(stories, setItems, page);
  }, [page]);

  useEffect(() => {
    setPage(1);
    pageNum(stories, localStorage.getItem("storiesPerPage"), setPageAmount);
    return returnListItems(stories, setItems, page);
  }, [stories]);

  return (
    <section>
      <ul className="list-box">{pageItems.map((el) => el)}</ul>
      <SearchNav
        page={page}
        pageNum={pageAmount}
        pageFunc={setPage}
      ></SearchNav>
    </section>
  );
}
export default List;
