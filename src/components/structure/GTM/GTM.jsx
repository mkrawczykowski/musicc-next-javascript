import React from 'react';
import Script from 'next/script'

export default function GTM() {
    return(
<>
      {/* <Script src="./src/static/test.js" type="text/plain" data-cookiecategory="analytics_storage" strategy="lazyOnload">

      </Script> */}

{/* <script
dangerouslySetInnerHTML={{
  __html: `
  console.log('Console message');
`,
}}
/> */}

{/* <script type="text/plain" data-cookiecategory="analytics_storage">
    {
        `
        (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f)
        })(window,document,'script','dataLayer','GTM-T4TSM6F')
        `
    }
        
    
    
</script> */}
</>
        

    )
}