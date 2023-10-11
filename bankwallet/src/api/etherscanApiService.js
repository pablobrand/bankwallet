import { ETHERSCAN_KEY } from "@env";
import axios from 'axios';
import { apiConfig } from './apiConfig';

const apiClient = axios.create({
  baseURL: apiConfig.etherscanUrl
})

export const getSomething = async () => {
  try {
    const response = await apiClient.get(`/?module=account&action=balance&apikey=${ETHERSCAN_KEY}&address=0x2dfA34F7033B3F6ddf3482085e34B7C62Cf7e32A&tag=latest`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};