import { getAllSales } from './api';

const getOrders = async (email) => getAllSales(email);

export default getOrders;
