import Script from "next/script";

export default function AdSenseScript() {
  return (
    <Script
      id="adsense-init"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2549733452335072"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
