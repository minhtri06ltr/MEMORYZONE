import Parser from "rss-parser";

export const getFeed = async () => {
  let parser = new Parser();

  let feed = await parser.parseURL(
    "https://vnexpress.net/rss/tin-moi-nhat.rss",
  );

  return feed;
};
