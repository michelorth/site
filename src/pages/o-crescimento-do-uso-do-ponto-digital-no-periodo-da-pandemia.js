
import React, { useEffect } from 'react';

function Page() {


    useEffect(() => {
        
        const script = document.createElement("meta");
        script.httpEquiv="refresh";
        script.content="0; url=https://blog.pontoicarus.com.br/aplicativo-de-ponto-eletronico-na-pandemia/"
        
        document.body.appendChild(script);


    }, [])



    return (<></>);
    
  }
  

export default Page