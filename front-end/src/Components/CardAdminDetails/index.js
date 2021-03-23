import React from 'react';

import S from './styles';

const CardAdminDetails = () => (
  <S.Container>

    <S.ColorStatus />
    <S.ColorStatusBottom />

    <S.Content>
      <S.ContentLeft>
        <h1>Pedido 1</h1>
        <h3>Rua Santa Ana, 340</h3>
      </S.ContentLeft>

      <S.Products>
        <img src="/images/image-heineken.png" alt="Heineken 600ml" />

        <S.DescriptionProducts>
          <div>
            <span>Heineken 600ml</span>
            <p>R$ 7,50</p>
          </div>

          <span>2 - R$ 14,00</span>
        </S.DescriptionProducts>

        <S.ButtonProduct
          type="button"
        >
          Ver Produto
        </S.ButtonProduct>
      </S.Products>

      <S.Products>
        <img src="/images/image-heineken.png" alt="Heineken 600ml" />

        <S.DescriptionProducts>
          <div>
            <span>Heineken 600ml</span>
            <p>R$ 7,50</p>
          </div>

          <span>2 - R$ 14,00</span>
        </S.DescriptionProducts>

        <S.ButtonProduct
          type="button"
        >
          Ver Produto
        </S.ButtonProduct>
      </S.Products>

      <S.Products>
        <img src="/images/image-heineken.png" alt="Heineken 600ml" />

        <S.DescriptionProducts>
          <div>
            <span>Heineken 600ml</span>
            <p>R$ 7,50</p>
          </div>

          <span>2 - R$ 14,00</span>
        </S.DescriptionProducts>

        <S.ButtonProduct
          type="button"
        >
          Ver Produto
        </S.ButtonProduct>
      </S.Products>

      <S.ContentRight>
        <h1>
          <span>Valor total:</span>
          {' '}
          R$ 2,20
        </h1>
        <h2>Entregue</h2>
      </S.ContentRight>
    </S.Content>

    <S.ConfirmButton>
      Confirmar entrega
    </S.ConfirmButton>

  </S.Container>
);

export default CardAdminDetails;
