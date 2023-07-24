import { useState, useEffect, useMemo } from "react";
import { Categories, IParamsConfig } from "../../@Types/Types";
import { dataFilter as getDataFilter } from "../../data/Filter";
import { ProductLists } from "../../data/ProductLists";
import Breadcrumb from "./breadcrumb/Breadcrumb";
import ListProducts from "./productListContent/listItem/ListProducts";
import SortProduct from "./productListContent/listItem/SortProduct";
import SideBar from "./productListContent/sidebar/SideBar";
import { useSearchParams } from "react-router-dom";
import FilterProduct from "../../utils/FilterProduct";
import TopTitle from "./productListContent/listItem/TopTitle";
import { useQuery } from "@tanstack/react-query";
import { getCategoriesParent } from "../../apis/category.api";
import { getListFilterSideBar } from "../../apis/datafilter.api";

// const dataFilter = getDataFilter as any;
const dataProductList = ProductLists;
const ProductList = () => {
  const [productLists, setProductList] = useState(dataProductList);
  const [search, setSearch] = useSearchParams();
  const paramConfig: IParamsConfig = Object.fromEntries([...search]);

  // const categories = getCategories;
  const categories = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategoriesParent(),
  });
  const dataFilters = useQuery({
    queryKey: ["filterSideBar"],
    queryFn: () => getListFilterSideBar(),
  });
  console.log(dataFilters);
  console.log("category", categories.data);

  const handleSelectCategory = (category: Categories) => {
    let listProduct = FilterProduct.findProductById(
      dataProductList,
      category.id
    );
    setProductList(listProduct);
  };

  //dependency thay thế dùng paramConfig cho useEffect khi rerender sẽ tạo ra 1 instance của paramConfig nên nó sẽ gọi lại useEffect => chạy vô hạn
  const dependency = useMemo(() => {
    return JSON.stringify(paramConfig);
  }, [paramConfig]);

  useEffect(() => {
    let listProduct = FilterProduct.filterProduct(dataProductList, paramConfig);
    if (
      (paramConfig.sort_type && paramConfig.sort_type === "vasup_desc") ||
      paramConfig.sort_type === undefined
    ) {
      setProductList(listProduct);
    } else if (
      paramConfig.sort_type &&
      paramConfig.sort_type === "norder_30_desc"
    ) {
      setProductList(FilterProduct.sortBanChay(listProduct));
    } else if (
      paramConfig.sort_type &&
      paramConfig.sort_type === "real_discount_desc"
    ) {
      setProductList(FilterProduct.sortKhuyenMai(listProduct));
    } else if (
      paramConfig.sort_type &&
      paramConfig.sort_type === "rating_percent_desc"
    ) {
      setProductList(FilterProduct.sortDanhGia(listProduct));
    }
  }, [dependency]);

  return (
    <main>
      <div className="bg-[#f2f3f4] min-h-[100vh] pb-[2.4rem] w-full relative">
        <div className="px-[1.6rem] containerct">
          {/* top */}
          <div className="py-[1.6rem]">
            <Breadcrumb />
            <TopTitle />
          </div>
          {/* body */}
          <div className="flex min-h-[90vh]">
            <div
              id="sidebar"
              className="bg-white rounded-[8px] mr-[2.4rem] max-h-[90vh] min-h-[80vh] overflow-x-hidden overflow-y-auto w-[20.6rem] sticky top-[8rem]"
            >
              {dataFilters.isSuccess && categories.isSuccess && (
                <SideBar
                  categories={categories.data.data}
                  handleSelectCategory={handleSelectCategory}
                  dataFilter={dataFilters.data.data}
                />
              )}
            </div>
            <div className="flex-1">
              <SortProduct />
              <div className="min-h-[80vh] mt-[1.6rem]">
                <ListProducts dataProductList={productLists} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductList;
