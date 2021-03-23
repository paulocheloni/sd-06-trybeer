import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import TopBar from '../../design-components/TopBar'
import DetailOrderCard from './components/DetailOrderCard'

function DetailOrder() {
  const [loading, setLoading] = useState(true)
  const [sale, setSale] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/sales/${id}`)
      .then((response) => {
        setSale(response.data)
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  
  return (
    loading ? <p>Loading....</p> : (
    <div>
      <TopBar title={'Detalhes do Pedido'} />
        <DetailOrderCard sale={sale} />
    </div>
  )
  )
}

export default DetailOrder;