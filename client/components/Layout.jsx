import Head from "next/head";

import { Header, Footer, Notify } from ".";

const Layout = ({
  children,
  title = "Memoryzone",
  description,
  keywords = "",
  removeLayout = false,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        />
        <link
          rel="icon"
          href="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/favicon.png?1653451447357"
        />
      </Head>
      <Notify />
      <header>
        {!removeLayout && <Header />}
      </header>
      <main>{children}</main>
      <footer>
        {!removeLayout && <Footer />}
      </footer>
    </>
  );
};

export default Layout;
