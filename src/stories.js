const requestFunc = async function () {
  const request = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );
  const data = await request.json();

  return data;
};

let userStories = requestFunc();

export default userStories;
