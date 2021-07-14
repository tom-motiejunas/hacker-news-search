const requestFunc = async function (pref = "top") {
  try {
    pref = pref.toLowerCase();
    const request = await fetch(
      `https://hacker-news.firebaseio.com/v0/${pref}stories.json?print=pretty`
    );
    const data = await request.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default requestFunc;
