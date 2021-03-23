import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Axios from 'axios';
import MenuAdmin from '../../Components/MenuAdmin';

const AdminProfile = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const fetchAdmin = async () => {
    const { token } = localStorage;
    const request = await Axios
      .get('http://localhost:3001/profile',
        { headers: { authorization: token } });
    const data = await request.data;
    setEmail(data.email);
    setName(data.name);
  };
  useEffect(() => { fetchAdmin(); }, []);
  useEffect(() => {
    if (!window.localStorage.token) {
      history.push('/login');
    }
  });
  return (
    <div>
      <MenuAdmin />
      Admin Profile
      <h2 data-testid="profile-name">
        Nome:
        {' '}
        { name }
      </h2>
      <h2 data-testid="profile-email">
        Email:
        {' '}
        { email }
      </h2>
    </div>
  );
};

export default AdminProfile;
