import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { useEffect } from 'react';

function SEO({ description="Aplicativo de ponto eletrônico online que administra funcionalidades da jornada de trabalho dispensando ou não ponto eletrônico tradicional, possibilitando a gestão de trabalho remoto e home office com ferramentas que automatizam funções essenciais para a contabilidade e recursos humanos.",
 lang, meta, 
 keywords="aplicativo ponto online, app ponto online, aplicativo controle de ponto eletronico, aplicativo de ponto eletronico, aplicativo para ponto eletronico, aplicativo ponto eletrônico, aplicativo ponto eletronico android, app de ponto eletronico, app para ponto eletronico, app ponto eletronico, controle de ponto eletronico, controle ponto eletronico, melhor app de ponto eletronico, ponto digital, ponto eletronico, ponto eletrônico, ponto eletrônico para celular, ponto por aplicativo, ponto eletronico app, ponto eletronico digital, ponto eletronico online, ponto eletronico por aplicativo, relogio de ponto, relogio de ponto eletronico, relogio ponto digital, sistema de ponto eletronico, sistema ponto eletronico, aplicativo de ponto",
 title='Aplicativo de Ponto Eletrônico | Ponto Icarus',
 canonical=""
}) {


  useEffect(() => {

   
    const script = document.createElement("script");
    script.id = 'anaBOT';
    script.text = '(function(n,r,l,d){try{var h=r.head||r.getElementsByTagName("head")[0],s=r.createElement("script");s.setAttribute("type","text/javascript");s.setAttribute("src",l);n.neuroleadId=d;h.appendChild(s);}catch(e){}})(window,document,"https://cdn.neurologic.com.br/neurolead/neurolead.min.js", 9853);';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
  
    const scriptAdopt = document.createElement("script");
    scriptAdopt.id = 'scriptAdopt';
    scriptAdopt.src = "//tag.goadopt.io/injector.js?website_code=01fc2569-dd46-4d41-8ea5-6fc0083e775d";
    scriptAdopt.className = "adopt-injector";
    scriptAdopt.async = true;
    scriptAdopt.defer = true;
    document.body.appendChild(scriptAdopt);
    

    const gtag = document.createElement("script");
    gtag.id = 'gtag';
    gtag.text = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TGW7WZB');";
    gtag.async = true;
    gtag.defer = true;
    document.body.appendChild(gtag);
  
    const gtag1 = document.createElement("noscript");
    gtag1.id = 'gtag1';
    gtag1.text = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TGW7WZB" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
    gtag1.async = true;
    gtag1.defer = true;
    document.body.appendChild(gtag1);
  

    const scriptGoogleAnalytics1 = document.createElement("script");
    scriptGoogleAnalytics1.id = 'scriptGoogleAnal1';
    scriptGoogleAnalytics1.text = "window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'G-FX1JK6D9B2');";
    scriptGoogleAnalytics1.async= true;
    document.body.appendChild(scriptGoogleAnalytics1);
  
    const facebook = document.createElement("script");
    facebook.text = "!function(f,b,e,v,n,t,s)  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?  n.callMethod.apply(n,arguments):n.queue.push(arguments)};  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';  n.queue=[];t=b.createElement(e);t.async=!0;  t.src=v;s=b.getElementsByTagName(e)[0];  s.parentNode.insertBefore(t,s)}(window, document,'script',  'https://connect.facebook.net/en_US/fbevents.js');  fbq('init', '804691046858553');  fbq('track', 'PageView');";
    facebook.id="facebook";
    facebook.async= true;
    facebook.defer = true;
    document.body.appendChild(facebook);
  
    const facebook1 = document.createElement("noscript");
    facebook1.textContent = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=804691046858553&ev=PageView&noscript=1"/>';
    document.body.appendChild(facebook1);
  
    const heatMap = document.createElement("script");
    heatMap.async= true;
    heatMap.id = 'heatMap';
    heatMap.text = "(function(h,e,a,t,m,p) {m=e.createElement(a);m.async=!0;m.src=t;p=e.getElementsByTagName(a)[0];p.parentNode.insertBefore(m,p);})(window,document,'script','https://u.heatmap.it/log.js');";
    document.body.appendChild(heatMap);
  
    const googleAnaliyticsUA = document.createElement("script");
    googleAnaliyticsUA.async= true;
    googleAnaliyticsUA.id = 'googleAnaliyticsUA';
    googleAnaliyticsUA.text = "window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'UA-108347306-5');";
    document.body.appendChild(googleAnaliyticsUA);
  
  
  }, []);
  


  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s`}
            link={[
              {
                rel: `canonical`,
                href: `https://pontoicarus.com.br${canonical}`
              },
              {
                rel: `canonical`,
                href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'
              }
            ]}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },

              {
                property: `geo.region`,
                content: 'BR-SC',
              },
              {
                property: `geo.placename`,
                content: 'Florian&oacute;polis',
              },
              {
                property: `geo.position`,
                content: '-27.578662;-48.510738',
              },
              {
                property: `ICBM`,
                content: '-27.578662, -48.510738',
              },
              {
                property: `robots`,
                content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
              },
              {
                property: `author`,
                content: 'Ponto Icarus',
              },
              {
                property: `og:image`,
                content: 'https://psainfo.s3-sa-east-1.amazonaws.com/featured_channel.png',
              },

            ]
           /*   .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )*/
              .concat(meta)}
          >
            <script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/e19f8097-a9eb-4c08-8516-db60c91fdb79-loader.js" ></script>
          </Helmet>
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
