
import React, { useEffect } from 'react';

function Page() {


    useEffect(() => {
        
        const script = document.createElement("meta");
        script.httpEquiv="refresh";
        script.content="0; url=https://blog.pontoicarus.com.br/lgpd-e-aplicativo-de-ponto-para-empresas/"
        
        document.body.appendChild(script);


    }, [])



    return (<></>);
    
  }
  

export default Page