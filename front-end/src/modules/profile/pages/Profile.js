import React from 'react';
import Form from '../components/Form';
import PaperContainer from '../../../design-system/containers/PaperContainer';

const Profile = () => (
  <div>
    <PaperContainer>
      <p className="hidden" data-testid="top-title">Meu perfil</p>
      <p>Profile</p>
      <Form />
    </PaperContainer>
  </div>
);

export default Profile;
