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
        <meta
          name="keywords"
          content={`Memoryzone shop, memoryzone, hardware shop, shop, ram, laptop, pc, cpu, vga, main board, psu, case, fan, ssd, technology, news, technology review, accessories ${keywords}`}
        />
        <meta
          name="author"
          content="Memoryzone shop"
        />
        <meta charSet="utf-8" />
        <meta
          name="theme-color"
          content="#008744"
        />
        <meta
          name="facebook-domain-verification"
          content="zyllkw8s56j1qi735d91jq5sd4tzob"
        />
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
