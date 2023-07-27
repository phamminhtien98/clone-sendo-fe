import { useEffect, useMemo, useRef, useState } from "react";
import { Categories, IParamsConfig, IProduct } from "../../@Types/Types";
import Breadcrumb from "./breadcrumb/Breadcrumb";
import ListProducts from "./productListContent/listItem/ListProducts";
import SortProduct from "./productListContent/listItem/SortProduct";
import SideBar from "./productListContent/sidebar/SideBar";
import { useLocation, useSearchParams } from "react-router-dom";
import TopTitle from "./productListContent/listItem/TopTitle";
import { useQuery } from "@tanstack/react-query";
import { getCategoriesParent } from "../../apis/category.api";
import { getListFilterSideBar } from "../../apis/datafilter.api";
import { getProductsListByParam } from "../../apis/product.api";

const ProductList = () => {
  const [search, setSearch] = useSearchParams();
  const location = useLocation();
  const cate_path = location.pathname.split("/")[1];
  const paramConfig: IParamsConfig = Object.fromEntries([...search]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [productList, setProductList] = useState<IProduct[]>([]);
  const listProductRef = useRef<HTMLDivElement>(null);
  const [dataFetched, setDataFetched] = useState(true);
  const [cancleNextPage, setCancleNextPage] = useState(false);

  const categories = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategoriesParent(),
    keepPreviousData: true,
  });

  const dataFilters = useQuery({
    queryKey: ["filterSideBar"],
    queryFn: () => getListFilterSideBar(),
    keepPreviousData: true,
  });

  const dataProductList = useQuery({
    queryKey: ["products", paramConfig, cate_path, page, pageSize],
    queryFn: () =>
      getProductsListByParam(paramConfig, cate_path, page, pageSize),
    keepPreviousData: true,
    onSuccess: (data) => {
      if (page === 1) {
        setProductList([...data.data]);
      } else {
        setProductList((pre) => [...pre, ...data.data]);
      }
      if (data.data.length === 0) {
        setCancleNextPage(true);
      } else {
        setCancleNextPage(false);
      }
      setDataFetched(true);
    },
  });

  const handleSelectCategory = (category: Categories) => {
    const paramsList = [...search.keys()];
    // Xóa từng tham số
    paramsList.forEach((param) => {
      search.delete(param);
    });
    // set lại url
    setSearch(search);
  };

  const handleNextPage = () => {
    setPage((pre) => pre + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        listProductRef.current &&
        window.scrollY + window.innerHeight >=
          listProductRef.current.scrollHeight * 0.8
      ) {
        if (page < 2 && dataFetched) {
          setPage((pre) => pre + 1);
          setDataFetched(false);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, dataFetched]);

  //dependency thay thế dùng paramConfig cho useEffect khi rerender sẽ tạo ra 1 instance của paramConfig nên nó sẽ gọi lại useEffect => chạy vô hạn
  const paramConfigMemo = useMemo(() => {
    return JSON.stringify(paramConfig);
  }, [paramConfig]);

  const cate_pathMemo = useMemo(() => {
    return JSON.stringify(cate_path);
  }, [cate_path]);

  // lắng nghe sự kiện khi trang được refresh
  useEffect(() => {
    // đưa thanh cuộn về đầu trang
    window.scrollTo(0, 0);
    const handleScroll = () => {
      // set lại page về 1
      if (window.scrollY === 0) {
        setPage(1);
        window.addEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cate_pathMemo, paramConfigMemo, location]);

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
              <div ref={listProductRef} className="min-h-[80vh] mt-[1.6rem]">
                {dataProductList.isSuccess && (
                  <ListProducts
                    dataProductList={productList}
                    page={page}
                    handleNextPage={handleNextPage}
                    cancleNextPage={cancleNextPage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductList;
