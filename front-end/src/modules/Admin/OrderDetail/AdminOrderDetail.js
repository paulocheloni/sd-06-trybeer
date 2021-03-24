import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SideBarAdmin from '../../../design-components/SideBarAdmin';
import DetailAdminCard from './components/DetailAdminCard';

function AdminOrderDetail() {
  const [loading, setLoading] = useState(true);
  const [sale, setSale] = useState({});
  const [status, setStatus] = useState(<span className="text-yellow-300">pendente</span>);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/sales/${id}`)
      .then((response) => {
        setSale(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  const handleClick = () => {
    axios.put(`http://localhost:3001/sales/${id}`)
      .then(() => {
        console.log('modificada a entrega');
      })
      .catch((err) => console.log(err.message));
    setStatus(<span className="text-green-400">entregue</span>);
    document.getElementById('deliver-button').style.display = 'none';
  };

  return (
    loading ? <p>Loading....</p> : (
      <div>
        <SideBarAdmin />
        <DetailAdminCard sale={ sale } status={ status } />
        <div
          className="flex justify-end mt-3 text-2xl"
        >
          <button
            id="deliver-button"
            type="button"
            className="p-4 bg-green-300 hover:bg-gray-500"
            data-testid="mark-as-delivered-btn"
            onClick={ () => handleClick() }
          >
            Marcar como entregue
          </button>
        </div>
      </div>
    )
  );
}

export default AdminOrderDetail;
