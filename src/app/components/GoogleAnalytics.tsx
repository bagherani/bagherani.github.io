import Script from "next/script";

export function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        src={"https://www.googletagmanager.com/gtag/js?id=G-SHHLFJ6CEB"}
      />

      <Script id="google-analytics">
        {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-SHHLFJ6CEB');
        `}
      </Script>
    </>
  );
}
