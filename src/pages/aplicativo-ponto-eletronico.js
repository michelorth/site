
import React, { useEffect } from 'react';

function Page() {


    useEffect(() => {
        
        const script = document.createElement("meta");
        script.httpEquiv="refresh";
        script.content="0; url=https://pontoicarus.com.br/"
        
        document.body.appendChild(script);


    }, [])



    return (<></>);
    
  }
  

export default Page