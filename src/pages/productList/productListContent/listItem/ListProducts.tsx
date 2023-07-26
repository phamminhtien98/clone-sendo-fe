import { IProduct } from "../../../../@Types/Types";
import BtnXemThem from "./BtnXemThem";
import NotResult from "./NotResult";
import ProductFlashSale from "./ProductFlashSale";
import ProductSKU from "./ProductSKU";

interface Props {
  dataProductList: IProduct[];
  page: number;
  handleNextPage: () => void;
  cancleNextPage: boolean;
}
const ListProducts = ({
  dataProductList,
  page,
  handleNextPage,
  cancleNextPage,
}: Props) => {
  return (
    <>
      {dataProductList.length === 0 ? (
        <NotResult />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mb-[0.8rem] m-[-0.8rem]">
          {dataProductList.map((item, index) =>
            item.type === "SKU" ? (
              <ProductSKU key={index} data={item} />
            ) : item.type === "FlashSale" || item.type === "DailySale" ? (
              <ProductFlashSale key={index} data={item} />
            ) : (
              ""
            )
          )}
        </div>
      )}
      {page >= 2 && !cancleNextPage && (
        <BtnXemThem handleNextPage={handleNextPage} />
      )}
    </>
  );
};

export default ListProducts;
