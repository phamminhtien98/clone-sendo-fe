import axios, { AxiosError } from "axios";
import { useSearchParams } from "react-router-dom";
//laays params tren url
export const useQueryString = () => {
  const [searchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries([...searchParams]);
  return searchParamsObject;
};

// : error is AxiosError >>> type predicate typescript
export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error);
}
