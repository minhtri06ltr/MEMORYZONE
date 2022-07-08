import Head from "next/head";
import { Header, Footer, Notify } from ".";
import { urlFor } from "../lib/client";

const Layout = ({
  children,
  title = "Memoryzone",
  description,
  keywords = "",
  removeLayout = false,
  id,
  image,
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

        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content={
            id
              ? `${process.env.NEXT_PUBLIC_CLIENT_URL}/${id}`
              : process.env.NEXT_PUBLIC_CLIENT_URL
          }
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:image"
          content={
            image
              ? urlFor(image)
                  .width(1200)
                  .height(630)
                  .url()
              : "https://cf.shopee.vn/file/9d68d0464992af12a564ca3fdbb05d0c"
          }
        />
        {/* Twitter Meta Tags */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="twitter:domain"
          content={
            process.env.NEXT_PUBLIC_CLIENT_URL
          }
        />
        <meta
          property="twitter:url"
          content={
            id
              ? `${process.env.NEXT_PUBLIC_CLIENT_URL}/${id}`
              : process.env.NEXT_PUBLIC_CLIENT_URL
          }
        />
        <meta
          name="twitter:title"
          content={title}
        />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta
          name="twitter:image"
          content={
            image
              ? urlFor(image)
                  .width(1200)
                  .height(630)
                  .url()
              : "https://cf.shopee.vn/file/9d68d0464992af12a564ca3fdbb05d0c"
          }
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
