import { Categories } from "../@Types/Types";
import http from "../utils/http";

export const getCategories = () => http.get<Categories[]>("categories");
export const getCategoriesParent = () =>
  http.get<Categories[]>("categories/categories-parent");
