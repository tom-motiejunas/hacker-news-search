const requestFunc = async function (pref = "top") {
  pref = pref.toLowerCase();
  const request = await fetch(
    `https://hacker-news.firebaseio.com/v0/${pref}stories.json?print=pretty`
  );
  const data = await request.json();

  return data;
};

export default requestFunc;
