import React from 'react';
import { Redirect } from 'react-router-dom';

function AdminProfile() {
  // const [renderProfile, setRenderProfile] = useState(false);
  // const [user, setUser] = useState({ email: '', name: '' });

  const verify = JSON.parse(localStorage.getItem('user'));
  const user = verify ? verify.role === 'administrator' : false;
  console.log(user);

  // useEffect(() => {
  //   if (!verify) {
  //     return setRenderProfile(false);
  //   }
  //   if (verify.role === 'administrator') {
  //     return setRenderProfile(true);
  //   }
  //   // setUser({ name: verify.name, email: verify.email });
  // }, [renderProfile, verify]);

  return (
    user
      ? (
        <div>
          <h1>Perfil</h1>
          <label htmlFor="nome">
            Nome:
            <input
              type="text"
              readOnly
              value={ verify.name }
              data-testid="profile-name"
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
