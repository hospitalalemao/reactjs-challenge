import axios, { AxiosError } from 'axios';
import ApiError from '../errors/ApiError';

const api = axios.create();

api.interceptors.response.use(
  response => response,
  error => {
    if (error instanceof AxiosError){    
      throw new ApiError(error.message, error.status);
    }

    throw error;
  }
)

export default api;