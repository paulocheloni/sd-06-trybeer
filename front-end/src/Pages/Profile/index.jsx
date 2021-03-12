import React, { useEffect, useState } from 'react';
import MenuTop from '../../Components/MenuTop';
import SideBar from '../../Components/SideBar';

import Container from './styles';

const Profile = () => (
  <Container>
    <MenuTop />
    <SideBar />
  </Container>
);

export default Profile;
