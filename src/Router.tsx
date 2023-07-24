import React from "react";
import SenDoLayout from "./layouts/SenDoLayout";
import { Navigate, useRoutes } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import { categories } from "./data/Categories";

interface IurlMap {
  path: string;
}
interface ICategory {
  id: number;
  image: string;
  level: number;
  name: string;
  parent_id: number;
  cate_path: string;
  sub_category?: ICategory[];
}

function flatCategories(categories: ICategory[]): IurlMap[] {
  let urlMap: IurlMap[] = [];

  categories.forEach((category) => {
    urlMap.push({ path: category.cate_path });

    if (category.sub_category) {
      let subUrlMap: IurlMap[] = flatCategories(category.sub_category);
      urlMap = urlMap.concat(subUrlMap);
    }
  });

  return urlMap;
}

const Router = () => {
  const routerData = flatCategories(categories).map((item) => ({
    path: `/${item.path}`,
    element: (
      <SenDoLayout>
        <ProductList />
      </SenDoLayout>
    ),
  }));
  const routeElements = useRoutes([
    ...routerData,
    {
      path: `/*`,
      element: <Navigate to={`/sach-van-phong-pham`} />,
    },
  ]);

  return routeElements;
};

export default Router;
