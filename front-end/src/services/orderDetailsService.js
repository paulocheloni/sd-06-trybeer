import { getOrderDetails } from './api';

const getOrder = async (id) => getOrderDetails(id);

export default getOrder;
