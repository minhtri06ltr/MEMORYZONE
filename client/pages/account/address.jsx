import { Layout, Path } from "../../components";
import Testt from "../../components/Testt";

const address = () => {
  return (
    <Layout
      title="Memoryzone | Address list"
      description="Memoryzone user address list"
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
          {
            title: "Customer Address",
            pathName: "/account/address",
          },
        ]}
      />
      <Testt />
    </Layout>
  );
};

export default address;
