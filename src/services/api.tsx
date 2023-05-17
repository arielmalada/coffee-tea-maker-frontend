import axios, { AxiosResponse } from "axios";

// consider BASE_URL as env
const BASE_URL = 'http://localhost:3001'

export const get = async (endpoint: string) => {
  try {
    const response: AxiosResponse = await axios.get(`${BASE_URL}/api/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}: ${error}`);
    throw error;
  }
};

export const post = async (endpoint: string, data: any) => {
  try {
    const response: AxiosResponse = await axios.post(`${BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error posting to ${endpoint}: ${error}`);
    throw error;
  }
};
