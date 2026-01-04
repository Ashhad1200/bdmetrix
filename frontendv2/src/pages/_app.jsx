import '@/src/styles/index.scss'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as fbq from '@/src/lib/fbpixel'

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Track page views on route change
    const handleRouteChange = () => {
      fbq.pageview()
    }

    // Track initial page load
    fbq.pageview()

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Facebook Pixel Script */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fbq.FB_PIXEL_ID}');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${fbq.FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      <Component {...pageProps} />
    </>
  )
}
