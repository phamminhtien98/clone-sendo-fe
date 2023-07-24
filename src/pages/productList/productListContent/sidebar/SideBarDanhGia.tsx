import { useState } from "react";
import iconDownArrow from "../../../../assets/svg/downArrow.svg";
import { IDataFilter } from "../../../../@Types/Types";
import { useSearchParams } from "react-router-dom";
interface Props {
  dataFilter: IDataFilter[];
  attribute_key: string;
}
const SideBarDanhGia = ({ dataFilter, attribute_key }: Props) => {
  const [showMore, setShowMore] = useState(true);
  const [search, setSearch] = useSearchParams();
  const paramConfig = Object.fromEntries([...search]);
  const data = dataFilter.filter(
    (item) => item.attribute_key === attribute_key
  );

  const IsActive: (
    gte_rating_percent: string | undefined,
    lte_rating_percent: string | undefined
  ) => boolean = (
    gte_rating_percent: string | undefined,
    lte_rating_percent: string | undefined
  ) => {
    const paramGtprice = paramConfig.gte_rating_percent;
    const paramLtprice = paramConfig.lte_rating_percent;

    if (
      (gte_rating_percent === "" &&
        paramGtprice === undefined &&
        paramLtprice === lte_rating_percent) ||
      (lte_rating_percent === "" &&
        paramLtprice === undefined &&
        paramGtprice === gte_rating_percent) ||
      (paramGtprice &&
        paramLtprice &&
        paramGtprice === gte_rating_percent &&
        paramLtprice === lte_rating_percent)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const HandleSelectRating = (
    gte_rating_percent: string | undefined,
    lte_rating_percent: string | undefined
  ) => {
    const paramGteRating = paramConfig.gte_rating_percent;
    const paramLteRating = paramConfig.lte_rating_percent;
    if (
      (gte_rating_percent === paramGteRating &&
        lte_rating_percent === paramLteRating) ||
      (!gte_rating_percent &&
        paramGteRating === undefined &&
        lte_rating_percent === paramLteRating) ||
      (!lte_rating_percent &&
        paramLteRating === undefined &&
        gte_rating_percent === paramGteRating)
    ) {
      search.delete("gte_rating_percent");
      search.delete("lte_rating_percent");
    } else {
      if (gte_rating_percent) {
        search.set("gte_rating_percent", `${gte_rating_percent}`);
      } else {
        search.delete("gte_rating_percent");
      }
      if (lte_rating_percent) {
        search.set("lte_rating_percent", `${lte_rating_percent}`);
      } else {
        search.delete("lte_rating_percent");
      }
    }
    setSearch(search, { replace: true });
  };

  return (
    <div className="py-[1.2rem] px-[0.4rem]">
      <div className="flex justify-between items-center">
        <span className="text-[#0f1e29] font-[700] ml-[1.2rem] text-[14px] leading-[1.8rem]">
          {data[0]?.attribute_name}
        </span>
        <button
          className="p-[0.7rem] hover:bg-[#f2f3f4] rounded-[4px] border-[1px] border-white"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          <img
            src={iconDownArrow}
            alt=""
            className={`w-[16px] h-[16px] ${showMore ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      {data[0].attribute_value && showMore && (
        <div
          className={`flex flex-col overflow-hidden pt-[0.4rem] px-[1.2rem]`}
        >
          {data[0].attribute_value.map((item, index) => (
            <span
              key={index}
              className="flex items-center h-[3.2rem] p-[0.8rem] rounded-[4px] bg-[#f2f3f4] mb-[0.8rem] cursor-pointer hover:font-[700] hover:bg-[#e7e8ea]"
              style={
                IsActive(item.gte_rating_percent, item.lte_rating_percent)
                  ? { border: "1px solid #ee2624", fontWeight: "700" }
                  : {}
              }
              onClick={() => {
                HandleSelectRating(
                  item.gte_rating_percent,
                  item.lte_rating_percent
                );
              }}
            >
              {item.option_name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBarDanhGia;
