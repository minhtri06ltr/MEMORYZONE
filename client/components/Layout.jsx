import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, title, description, removeLayout = false }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>{!removeLayout && <Header />}</header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
