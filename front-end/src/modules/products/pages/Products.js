import React from 'react';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import PaperContainer from '../../../design-system/containers/PaperContainer';

const Products = () => (
  <div className="w-full min-h-screen p-10 ">
    <PaperContainer>
      <p className="text-2xl">Produtos</p>
      <Header />
      <Gallery />
    </PaperContainer>
  </div>
);

export default Products;
