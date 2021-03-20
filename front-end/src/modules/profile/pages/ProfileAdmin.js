import React from 'react';
import Form from '../components/admin/Form';
import PaperContainer from '../../../design-system/containers/PaperContainer';

const ProfileAdmin = () => (
  <div>
    <PaperContainer>
      <p className="hidden" data-testid="top-title">Meu perfil</p>
      <p>Profile Admin</p>
      <Form />
    </PaperContainer>
  </div>
);

export default ProfileAdmin;
