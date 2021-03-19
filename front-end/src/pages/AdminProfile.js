import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import SideBarAdmin from '../components/SideBarAdmin'

function AdminProfile() {
  const [renderProfile, setRenderProfile] = useState(false);
  const [nameLocal, setNameLocal] = useState('')
  const [emailLocal, setEmailLocal] = useState('')

  const verify = JSON.parse(localStorage.getItem('user'));
  const user = verify ? verify.role === 'administrator' : false;
  console.log(user);

  // useEffect(() => {
  //   if (user) return setRenderProfile(true)
  //   setRenderProfile(false);
  // }, []);

  // useEffect(() => {
  //   setNameLocal(user.name)
  //   setEmailLocal(user.email)
  // },[])

  return (
    user
      ? (
        <div>
          <SideBarAdmin />
          <h1>Perfil</h1>
          <label htmlFor="nome">
            Nome
            <input
              type="text"
              readOnly
              data-testid="profile-name"
              value={ verify.name }
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              readOnly
              value={ verify.email }
              data-testid="profile-email"
            />
          </label>
        </div>
      )
      : <Redirect to="/login" />
  );
}

export default AdminProfile;
