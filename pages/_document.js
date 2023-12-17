// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://unpkg.com/swiper@6.6.2/swiper-bundle.min.css" />
          <meta name="title" content="Headless Commerce example with Netlify" key="title" />
          <meta name="description" content="An open source headless commerce example powered by Commerce.js and Netlify. Start your headless commerce application now!" />
          <meta property="og:title" content="Commerce.js | Demo storefront" />
          <meta property="og:image" content="https://cdn.chec.io/email/assets/marketing/demo-preview.png" />
          <meta property="og:description" content="A custom, open source demo storefront built with Next.js and Commerce.js. Take a look!" />
          <meta property="og:url" content="https://commercejs-demo-store.netlify.app" />
          <meta property="twitter:title" content="Commerce.js | Demo storefront" />
          <meta name="twitter:creator" content="@commercejs" />
          <meta property="twitter:image" content="https://cdn.chec.io/email/assets/marketing/demo-preview.png" />
          <meta property="twitter:description" content="A custom, open source demo storefront built with Next.js and Commerce.js. Take a look!" />
          <meta name="twitter:card" content="summary_large_image" />
          <Script strategy="beforeInteractive"
        id="exponea-script"
          dangerouslySetInnerHTML={{
            __html: `
          !function(e,n,t,i,r,o){function s(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,c="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var r=t.getElementsByTagName(n)[0];return r.parentNode.insertBefore(i,r),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}o.target=o.target||"https://api.exponea.com",o.file_path=o.file_path||o.target+"/js/exponea.min.js",r[n]=p(["anonymize","initialize","identify","getSegments","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers","_preInitialize","_initializeConfig"]),r[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),r[n].segments=p(["subscribe"]),r[n]["snippetVersion"]="v2.7.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(r,n,"performance"),function(e,n,t,i,r,o){e[r]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(o.exec(n.cookie)||["","new"])[1],path:t.target}}(r,e,o,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(o,t,e),function(e,n,t,i,r,o,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var l,f=e.new_experiments.hide_class||c,_=e.new_experiments.timeout||a,g=encodeURIComponent(o.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?l=s(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(l=s(e.cookies.expires.tracking))),l&&l<new Date&&(l=void 0);var d=e.target+"/webxp/"+n+"/"+o[t].sign+"/modifications.min.js?http-referer="+g+"&timeout="+_+"ms"+(l?"&cookie-expires="+Math.floor(l.getTime()/1e3):"");"sync"===e.new_experiments.mode&&o.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,r){t[r][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[r][n]),i.writeln("<"+n+">!"+r+".init && document.writeln("+r+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(d,n,o,p,t):function(e,n,t,i,r,o,s,a){o.documentElement.classList.add(e);var c=m(t,i,o);function p(){r[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,o)}function u(){o.documentElement.classList.remove(e)}c.onload=p,c.onerror=p,r.setTimeout(u,n),r[s]._revealPage=u}(f,_,d,n,o,p,r,t)}}(o,t,i,0,n,r,e),function(e,n,t){var i;e[n]._initializeConfig(t),(null===(i=t.experimental)||void 0===i?void 0:i.non_personalized_weblayers)&&e[n]._preInitialize(t),e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(r,n,o)}(document,"exponea","script","webxpClient",window,{
          target: "https://api-demoapp.exponea.com",
          token: "b5b56d38-0a70-11eb-b64a-8eb5f3c8d64c",
          experimental: {
              non_personalized_weblayers: true
          },
          // replace with current customer ID or leave commented out for an anonymous customer
          // customer: window.currentUserId,
          track: {
              google_analytics: false,
          },
          new_experiments: {
            mode: 'sync'
          },
          webOptimization: false
      });
      exponea.start();
      console.log("ANOTHER SCRIPT!")`
          }}/>
          <Script>console.log('hi');</Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
