import axios from "axios";

// consider BASE_URL as env
const BASE_URL = "http://localhost:3001";

export const get = async (endpoint: string) =>
  axios.get(`${BASE_URL}/api/${endpoint}`);

export const post = async (endpoint: string, data: any) =>
  axios.post(`${BASE_URL}/api/${endpoint}`, data);
