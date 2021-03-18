import React from 'react';

import MenuTop from '../../Components/MenuTop';
import SideBar from '../../Components/SideBar';
import LoadingBeer from '../../Components/LoadingBeer';

import S from './styles';

const MyOrder = () => (
  <S.Container>
    <MenuTop />

    <SideBar />

    <LoadingBeer />

  </S.Container>
);

export default MyOrder;
