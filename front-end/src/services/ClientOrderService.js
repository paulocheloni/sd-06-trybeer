import { getAllSales } from "./api";

export const getOrders = async (email) => await getAllSales(email);