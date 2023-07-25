import { Key } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../../@Types/Types";

interface Props {
  data: IProduct;
}

const ProductSKU = ({ data }: Props) => {
  const handleChangeImg = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src =
      "https://media3.scdn.vn/img4/2021/01_11/Qokz3RuOMUPhdFHEEDzu_simg_de2fe0_175x175_maxb.jpg";
  };

  return (
    <div className="p-[0.8rem]">
      <Link to={""} className="text-[#0f1e29]">
        <div
          className="bg-white rounded-[8px] cursor-pointer overflow-hidden hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
          style={{
            boxShadow:
              "0 2px 4px 0 rgba(0,0,0,.12), 0 -2px 2px 0 rgba(0,0,0,.04)",
          }}
        >
          {/* ảnh */}
          <div className="relative rounded-t-[8px] overflow-hidden">
            <div className="w-full h-max overflow-hidden relative pt-[100%]">
              <div className="h-full w-full top-0 bottom-0 left-0 right-0 absolute">
                <img
                  src={data.thumbnail_url}
                  onError={handleChangeImg}
                  alt={""}
                  className="h-full left-[50%] top-[50%] absolute translate-y-[-50%] translate-x-[-50%]"
                />
              </div>
            </div>
          </div>
          {/* thông tin */}
          <div className=" pt-[1.6rem] px-[0.8rem] pb-[0.8rem] relative">
            {/* sự kiện */}
            {data.event_banners && (
              <div className="flex h-[1.6rem] overflow-hidden absolute w-full top-0 translate-x-[-0.8rem] translate-y-[-50%]">
                {data.event_banners.map(
                  (item, index: Key | null | undefined) => (
                    <img key={index} src={item.image} alt="" />
                  )
                )}
              </div>
            )}
            {/* tên sản phẩm  */}
            <span className="text-[#0f1e29] mb-[0.4rem] h-[3.6rem] line-clamp-2 text-ellipsis leading-[1.8rem]">
              {data.shop_badge_urls && (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img
                  className="h-[1.2rem] mr-[0.4rem] object-contain inline-block align-baseline"
                  src={data.shop_badge_urls[0]?.icon_url}
                />
              )}
              {data.name}
            </span>
            {/* giá */}
            <div className="">
              <div className="h-[1.6rem] flex items-center">
                {data.promotion_percentage && (
                  <>
                    <span className="text-[#b7bbbf] text-[11px] leading-[1.2rem] line-through">
                      {data.final_price &&
                        data.final_price.toLocaleString("vi-VN")}
                      đ
                    </span>
                    <span className="text-[#ee2624] text-[12px] leading-[1.6rem] ml-[0.4rem]">{`-${data.promotion_percentage}%`}</span>
                  </>
                )}
              </div>
              <div className="text-[#ee2624] leading-[2.2rem] text-[16px] font-[700] text-ellipsis overflow-hidden whitespace-nowrap">
                {data.price_range}
              </div>
            </div>
            {/* Ưu đãi */}
            <div className="h-[2rem]">
              {data.promotion_sub_message?.text && (
                <div className=" pb-[0.3rem] pt-[0.1rem] flex bg-[#f2f3f4] px-[0.4rem] py-[0.2rem] rounded-[12px] w-max items-center">
                  <img
                    className="w-[1.2rem] h-[1.2rem]"
                    src={data.promotion_sub_message.icon}
                    alt=""
                  />
                  <span className="text-[#3f4b53] text-[11px] text-ellipsis overflow-hidden ml-[0.4rem]">
                    {data.promotion_sub_message.text}
                  </span>
                </div>
              )}
            </div>
            {/* Mở bán */}
            <div className="h-[1.6rem]">
              {data.quantity && data.remaining && (
                <div className="mt-[0.4rem]">
                  <div className="h-[1.4rem] rounded-[8px] bg-[#f47c7b] w-[100%] relative overflow-hidden">
                    <div
                      className="absolute h-[1.4rem] top-0 left-0 z-0 rounded-[8px] bg-[#d52220]"
                      style={{
                        width: `${
                          ((data.quantity - data.remaining) * 100) /
                          data.quantity
                        }%`,
                      }}
                    ></div>
                    <span className="absolute z-[1] left-[50%] translate-x-[-50%] text-white text-[11px] text-center">
                      {data.quantity === data.remaining
                        ? "Mở bán"
                        : `Đã bán ${data.quantity - data.remaining}`}
                    </span>
                  </div>
                </div>
              )}
            </div>
            {/* đánh giá & nơi bán */}
            <div className="flex justify-between items-center text-[#0f1e29] h-[1.2rem] mt-[0.4rem] text-[11px] leading-[1.2px]">
              <div>
                {data.rating_percent && (
                  <>
                    <span>{data.rating_percent}/5</span>
                    <span className="text-[1rem] leading-[1.1rem] text-[#ffc600] ml-[0.4rem]">
                      ★
                    </span>
                  </>
                )}
              </div>
              <span className="">{data.shop_warehouse_city}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductSKU;
