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
  metaType = "website",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={
            description +
            ", Memoryzone | Professional in technology"
          }
        />
        <meta
          name="keywords"
          content={`Memoryzone shop, memoryzone, hardware shop, shop, ram, laptop, pc, cpu, vga, main board, psu, case,
          phone memory card, main camera, USB, USB 3.0, wireless device, fan, ssd, technology, news, technology review, accessories ${keywords}, ${title}, Memoryzone | Professional in technology `}
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
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        />
        <meta
          name="google-site-verification"
          content="mZDS5aigJDqHQPC24hoh9MtPkjwQBXKw4i0OEmEHbEk"
        />
        <link
          rel="icon"
          href="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/favicon.png?1653451447357"
        />
        <meta
          name="revisit-after"
          content="1 days"
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
          content={metaType}
        />
        <meta
          property="og:title"
          content={title}
        />
        <meta
          property="og:site_name"
          content="Memoryzone | Professional in technology"
        ></meta>
        <meta
          property="og:description"
          content={
            description +
            ", Memoryzone | Professional in technology"
          }
        />
        <meta
          property="og:image"
          content={
            image
              ? urlFor(image)
                  .width(1200)
                  .height(630)
                  .url()
              : "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/slider1_1.jpg?1657625578780"
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
          content={
            description +
            ", Memoryzone | Professional in technology"
          }
        />
        <meta
          name="twitter:image"
          content={
            image
              ? urlFor(image)
                  .width(1200)
                  .height(630)
                  .url()
              : "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/slider1_1.jpg?1657625578780"
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
