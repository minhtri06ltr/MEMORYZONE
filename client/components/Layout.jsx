import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>MEMORYZONE</title>
        <meta name="description" content="MEMORYZONE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
