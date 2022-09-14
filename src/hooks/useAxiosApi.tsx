import axios from 'axios';
import { UseRequest } from '../Interfaces';

const useAxiosApi = <T extends {}>(): UseRequest<T> => {

  const apiGet = async (url: string) => {
    try {
      const { data } = await axios.get<T>(url);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return 'An unexpected error occurred';
      }
    }
  }

  return {
    apiGet
  }
};

export default useAxiosApi;