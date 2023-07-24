import BtnXemThem from "./BtnXemThem";
import NotResult from "./NotResult";
import ProductFlashSale from "./ProductFlashSale";
import ProductSKU from "./ProductSKU";

interface Props {
  dataProductList: any[];
}
const ListProducts = ({ dataProductList }: Props) => {
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
      <BtnXemThem />
    </>
  );
};

export default ListProducts;
