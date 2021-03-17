import React from 'react';

function ProductCard(props) {
  const { id, name, price, url_image: urlImage } = props.productInfo;

  // const imagePath = getImage(urlImage)

  return (
    <div>
      <h2>{name}</h2>
      <img src={ urlImage } alt={ name } />
    </div>
  );
}

export default ProductCard;
