import { Key } from "react";
import { Link } from "react-router-dom";

interface Props {
  data: any;
}
const ProductFlashSale = ({ data }: Props) => {
  return (
    <div className="p-[0.8rem]">
      <Link to={""} className="text-[#0f1e29]">
        <div
          className="bg-white rounded-[8px] cursor-pointer overflow-hidden flex flex-col py-[1.2rem] px-[0.8rem] hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
          style={{
            backgroundImage: "linear-gradient(180deg,#fff 14%,#fbdcc5)",
            boxShadow:
              "0 2px 4px 0 rgba(0,0,0,.12), 0 -2px 2px 0 rgba(0,0,0,.04)",
          }}
        >
          <div
            className={`${
              data.title === "FlashSale" ? "w-[10.2rem]" : "w-full"
            } h-[2.4rem] mb-[3.9rem] bg-contain bg-no-repeat`}
            style={{
              backgroundImage: `url(${
                data.type === "FlashSale"
                  ? "https://media3.scdn.vn/img4/2020/12_28/925jZWJ2HKwnRFRQ0FlC.png"
                  : "https://media3.scdn.vn/img4/2020/12_28/mRJ4ZDJW9Jndp3bsMAOw.png"
              })`,
            }}
          ></div>
          <div
            className="bg-white rounded-[8px] cursor-pointer overflow-hidden flex flex-col"
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
                    src={data.item.thumbnail_url}
                    alt="thumbnail"
                    className="h-full left-[50%] top-[50%] absolute translate-y-[-50%] translate-x-[-50%]"
                  />
                </div>
              </div>
            </div>
            {/* thông tin */}
            <div className=" pt-[1.6rem] px-[0.8rem] pb-[0.8rem] relative">
              {/* sự kiện */}
              {data.item.event_banners && (
                <div className="flex h-[1.6rem] overflow-hidden absolute w-full top-0 translate-x-[-0.8rem] translate-y-[-50%]">
                  {data.item.event_banners.map(
                    (
                      item: { image: string | undefined },
                      index: Key | null | undefined
                    ) => (
                      <img key={index} src={item.image} alt="" />
                    )
                  )}
                </div>
              )}
              {/* giá */}
              <div className="leading-[1.8rem]">
                <div className="text-[#ee2624] text-[16px] leading-[2.2rem] font-[700] text-ellipsis overflow-hidden">
                  {data.item.final_price.toLocaleString("vi-VN")}đ
                </div>
                <div className="h-[1.6rem]">
                  {data.item.promotion_percentage && (
                    <>
                      <span className="text-[#b7bbbf] text-[11px] line-through">
                        {data.item.price}
                      </span>
                      <span className="text-[#ee2624] text-[12px] leading-[1.6rem] ml-[0.4rem]">{`-${data.item.promotion_percentage}%`}</span>
                    </>
                  )}
                </div>
              </div>
              {/* Mở bán */}
              <div className="h-[1.4rem] mb-[0.4rem]">
                {data.item.quantity && data.item.remaining && (
                  <div className="mt-[0.4rem]">
                    <div className="h-[1.4rem] mb-[0.4rem] rounded-[8px] bg-[#f47c7b] w-[100%] relative overflow-hidden">
                      <div
                        className="absolute h-[1.4rem] top-0 left-0 z-0 rounded-[8px] bg-[#d52220]"
                        style={{
                          width: `${
                            ((data.item.quantity - data.item.remaining) * 100) /
                            data.item.quantity
                          }%`,
                        }}
                      ></div>
                      <span className="leading-[1.5rem] absolute z-[1] left-[50%] translate-x-[-50%] text-white text-[11px] text-center">
                        {data.item.quantity === data.item.remaining
                          ? "Mở bán"
                          : `Đã bán ${
                              data.item.quantity - data.item.remaining
                            }`}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductFlashSale;
