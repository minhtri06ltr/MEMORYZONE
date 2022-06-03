import { Layout, Path, Test } from "../components";

const account = () => {
  return (
    <Layout
      title="Memoryzone | Account"
      description="Memoryzone account information"
    >
      <Path
        path={[
          {
            title: "Home",
            pathName: "/",
          },
          {
            title: "Account",
            pathName: "/account",
          },
        ]}
      />
      <Test />
    </Layout>
  );
};

export default account;
