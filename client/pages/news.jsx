import { Layout, Path } from "../components";
import Test from "../components/Test";

const news = () => {
  return (
    <Layout
      title="Memoryzone | News"
      description="Memoryzone news page - where you can read all the newest information about technology, product, computer tips and trick, software and trending content "
    >
      <Path
        path={[
          {
            title: "Home",
            pathName: "/",
          },
          {
            title: "News",
            pathName: "/news",
          },
        ]}
      />
      <Test />
    </Layout>
  );
};

export default news;
