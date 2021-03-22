const connection = require('./connection');

const coll = 'sales';

const createOrder = async (email,totalPrice, street, checkoutProducts) => {
  const {streetInput, houseNumberInput} = street; 
  const [id] = await connection.execute('SELECT * FROM Trybeer.users WHERE email = ?', [email]);

  console.log(id[0])

  // const result = await connection.execute(
  //   'INSERT INTO Trybeer.? (total_price, user_id, delivery_address, delivery_number) VALUES (?, ?, ?, ?)',
  //   [coll, totalPrice, id, streetInput, houseNumberInput]);
  
  
  return id;
  
}

module.exports = {
  createOrder,
}