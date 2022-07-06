import Script from "next/script";

export const TawkTo = () => {
  return (
    <Script strategy="lazyOnload">
      {`
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/62c5716db0d10b6f3e7b134a/1g79k65cl';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();
        `}
    </Script>
  );
};

export default TawkTo;
