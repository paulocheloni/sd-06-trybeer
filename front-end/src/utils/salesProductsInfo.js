const salesProductsInfo = (items) => {
  const arrItems = [...new Set(items)];
  const arr = [];
  arrItems.map((e) => arr.push({ prod_id: e, qty: arr.filter((f) => f === e).length }));
  return arr;
};

export default salesProductsInfo;
