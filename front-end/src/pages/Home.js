import React, { useContext, useEffect } from 'react';





export default function Home(props) {
  const { history } = props

  useEffect(() => {
    history.push('./login');
  }, [])
  return (
   
    <div>
      <p>Teste</p>
    </div>
    
   
  );
}
