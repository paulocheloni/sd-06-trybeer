import React, { useEffect, useState, useContext, useRef } from 'react';
import GlobalContext from '../../../context/Context';

const Buttons = ({index, prod, allProd}) => {
  const [quantity, setQuantity] = useState(0);
  const [nameProd, setNameProd] = useState();
  // const [allProd, setAllProd] = useState();

  const { totalPrice, setTotalPrice } = useContext(GlobalContext)
  // const ref = useRef();
  // const prevName = ref.current;
  
  useEffect(() => {
    console.log(allProd);
  }, []);

  const handleClickMinus = () => {
    if (quantity > 0) {
      setNameProd(prod.name)
      const num = totalPrice
      setTotalPrice(num - Number.parseInt(prod.price));
      setQuantity(quantity - 1);
    }
  };

  const handleClickPlus = () => {
    setNameProd(prod.name)
    const num = totalPrice
    setTotalPrice(num + Number.parseInt(prod.price));
    setQuantity(quantity + 1);
  };

  // const verifyCart = (nameProd,qtd) => {
  //   allProd.find((product) => {
  //     return product.name === nameProd, setAllProd(product.quantity = qtd);
  //   });
  // };

  useEffect(() => {
    // if(allProd) verifyCart(nameProd, quantity);
  }, [allProd])

  

  useEffect(() => {
    // if (allProd) setOldCart(verifyCart(nameProd, quantity));
    // if (quantity > 0) setNewProd([{ ...prod, quantity }]);
  }, [quantity]);

  return (
    <>
      <button 
        data-testid={`${ index }-product-minus`}
        type="button"
        name="-"
        onClick={ () => handleClickMinus() }>-</button>
      <p data-testid={`${ index }-product-qtd`}>{quantity}</p>
      <button data-testid={`${ index }-product-plus`}
        type="button"
        name="+"
        onClick={ () => handleClickPlus() }>+</button>
    </>
  );
};

export default Buttons;
