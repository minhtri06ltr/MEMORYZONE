import Script from "next/script";

const Analytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        id="googleAnalyticsID"
        src="https://www.googletagmanager.com/gtag/js?id=G-7B9E9YY3EC"
      ></Script>

      <Script
        strategy="lazyOnload"
        id="googleAnalyticsScript"
      >
        {`
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());

 gtag('config', 'G-7B9E9YY3EC');
 `}
      </Script>
    </>
  );
};

export default Analytics;
