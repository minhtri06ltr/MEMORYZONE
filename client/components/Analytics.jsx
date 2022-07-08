import Script from "next/script";

const Analytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        id="googleAnalyticsID"
        src={`https://www.googletagmanager.com/gtag/js?id=G-X5ERJPXB8Z`}
      ></Script>

      <Script
        strategy="lazyOnload"
        id="googleAnalyticsScript"
      >
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-X5ERJPXB8Z');
 `}
      </Script>
    </>
  );
};

export default Analytics;
