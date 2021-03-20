import React, { useContext } from 'react';
import GlobalContext from '../../../context/Context';
import PaperContainer from '../../../design-system/containers/PaperContainer';
import BodyContainer from '../../../design-system/containers/BodyContainer';

function Checkout() {
  const { cartItems } = useContext(GlobalContext);
  const storedItems = cartItems;
  console.log(cartItems)

  const totalPrice = storedItems.reduce((acc, curr) => {
    const result = (acc + curr.quantity * curr.price);
    return result;
  }, 0);

  return (
    <BodyContainer>
      <PaperContainer>
        {
          storedItems.map((item, index) => (
            <div className="flex m-4 border" key={ `${index}-algo4` }>
              <p
                className="ml-3"
                key={ `${index}-algo ` }
              >
                {item.quantity}
              </p>

              <p
                className="ml-3"
                key={ `${index}-algo2` }
              >
                {item.name}
              </p>

              <p
                className="ml-3"
                key={ `${index}-algo3` }
              >
                {`R$ ${item.price.replace('.', ',')}`}
              </p>
            </div>
          ))
        }
        <p
          className="w-full flex justify-center"
        >
          { `Total: R$ ${(totalPrice.toFixed(2)).replace('.', ',')}` }
        </p>
        <form className="flex flex-col w-full items-center mt-4">
          <p>Delivery Address</p>
          <label htmlFor="address" className="w-full flex flex-col items-center">
            <input
              className="border w-2/3 mt-3"
              id="adress"
              name="address"
              placeholder="Street"
              type="text"
            />
          </label>
          <label htmlFor="house-num" className="w-full flex flex-col items-center">
            <input
              className="border w-2/3 mt-3"
              id="house-num"
              name="house-num"
              placeholder="Residence number"
              type="text"
            />
          </label>
          <button
            className="mt-4 border w-1/2 bg-green-100"
            type="button"
          >
            CONFIRM
          </button>
        </form>

      </PaperContainer>
    </BodyContainer>
  );
}

export default Checkout;
