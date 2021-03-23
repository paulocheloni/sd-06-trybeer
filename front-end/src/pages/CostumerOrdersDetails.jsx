import React from 'react';
import Header from '../components/HeaderComponent';
import CostumerOrdersDetailsCard from '../components/CostumerOrdersDetailsCard';

function CostumerOrdersDetails() {
  const history = useHistory();
  const {
    user,
  } = useContext(BeersAppContext);

  if (!user.token) history.push('/login');

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/orders', {
      headers: {
        'Content-Type': 'application/json',
        authorization: user.token,
      },
    }).then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <>
      <Header text="Detalhes dos pedidos" />
      <div className="order-list">
        {orders.map((element, index) => (
          <div key={ element.id }>
            <CostumerOrdersDetailsCard
              element={ element }
              index={ index }
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default CostumerOrdersDetails;
