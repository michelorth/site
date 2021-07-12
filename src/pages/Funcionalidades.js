
import React, { useEffect } from 'react';

function Page() {


    useEffect(() => {
        
        const script = document.createElement("meta");
        script.httpEquiv="refresh";
        script.content="0; url=https://www.pontoicarus.com.br/#funcionalidades"
        
        document.body.appendChild(script);


    }, [])



    return (<></>);
    
  }
  

export default Page