import { getFeed } from "../lib/rss";
import { formatSourceLink } from "../utils/format";

const Test = ({ rssFeed }) => {
  console.log(rssFeed);
  return (
    <div className="w-screen min-h-screen">
      {rssFeed.items.map((item, index) => (
        <div key={index}>
          <div>
            {formatSourceLink(item.content)}
          </div>
          <div></div>
          <div> ============</div>
        </div>
      ))}
    </div>
  );
};
export default Test;

export const getStaticProps = async () => {
  const rssFeed = await getFeed();
  return {
    props: { rssFeed },
  };
};
