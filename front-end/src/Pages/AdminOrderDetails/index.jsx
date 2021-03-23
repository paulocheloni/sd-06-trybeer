import React from 'react';

import MenuTopAdmin from '../../Components/MenuTopAdmin';
import SideBarAdmin from '../../Components/SideBarAdmin';
import CardAdminDetails from '../../Components/CardAdminDetails';

import S from './styles';

const AdminOrderDetails = () => (
  <S.Container>

    <MenuTopAdmin dataTestid="top-title" title="Meu perfil" />

    <S.Context>

      <SideBarAdmin />

      <S.ContainerCard>
        <CardAdminDetails />
      </S.ContainerCard>

    </S.Context>

  </S.Container>
);

export default AdminOrderDetails;
