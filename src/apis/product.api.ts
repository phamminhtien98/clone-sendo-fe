import { IParamsConfig, IProduct } from "../@Types/Types";
import http from "../utils/http";

export const getProductsList = () => http.get<IProduct[]>("products");

export const getProductsListByParam = (
  param: IParamsConfig,
  cate_path: string,
  page: number,
  pageSize: number
) =>
  http.get<IProduct[]>("products/filter", {
    params: { ...param, cate_path: cate_path, p: page, s: pageSize },
  });
