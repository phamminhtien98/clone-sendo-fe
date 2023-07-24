import { useState, useEffect, useRef } from "react";
import downArrow from "../../../../assets/svg/downArrow.svg";
import iconCheck from "../../../../assets/svg/iconCheck.svg";
import { useSearchParams } from "react-router-dom";

const sortTypes = [
  {
    sortType: "vasup_desc",
    name: "Đề cử",
  },
  {
    sortType: "norder_30_desc",
    name: "Bán chạy",
  },
  {
    sortType: "real_discount_desc",
    name: "Khuyến mãi",
  },
  {
    sortType: "rating_percent_desc",
    name: "Đánh giá tốt",
  },
];

const SortProduct = () => {
  const [sortType, setSortType] = useState<{ sortType: string; name: string }>({
    sortType: "vasup_desc",
    name: "Đề cử",
  });
  const [show, setShow] = useState(false);
  const [search, setSearch] = useSearchParams();
  const paramConfig = Object.fromEntries([...search]);
  const divSelectSortType = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const paramSortType = paramConfig.sort_type;
    if (paramSortType) {
      setSortType(
        sortTypes.find((item) => item.sortType === paramSortType) ||
          sortTypes[0]
      );
    }
  }, []);

  const handleSelectSortType = (item: { sortType: string; name: string }) => {
    setSortType(item);
    search.set("sort_type", item.sortType);
    setSearch(search, { replace: true });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // nếu element click không nằm trong divSelectSortType thì setShow(false)
      if (
        divSelectSortType.current &&
        !divSelectSortType.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex cursor-pointer items-center">
      <span className="mr-[0.8rem]">Sắp xếp theo:</span>
      <div
        className="w-full lg-16_67"
        onClick={() => setShow(!show)}
        ref={divSelectSortType}
      >
        <div className=" relative bg-white border-[1px] border-[#cfd2d4]  hover:border-[#3f81fe] min-h-[3.36rem] rounded-[4px] flex justify-between items-center pl-[0.8rem]">
          <span className="text-[#6f787e]">{sortType.name}</span>
          <div className="px-[0.8rem]">
            <img
              src={downArrow}
              alt=""
              className={`w-[16px] h-[16px] max-w-[unset] ${
                show ? "rotate-180" : ""
              }`}
            />
          </div>
          {show && (
            <ul
              className=" p-[0.8rem] shadow bg-white rounded-[4px] absolute w-[90%] top-[120%] left-[50%] translate-x-[-50%] z-[2]"
              style={{
                boxShadow:
                  "0 -4px 16px 0 rgba(0,0,0,.1), 0 8px 16px 0 rgba(0,0,0,.1)",
              }}
            >
              {sortTypes.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-between items-center p-[0.8rem] rounded-[4px] hover:bg-[#f2f3f4]"
                    onClick={() => {
                      handleSelectSortType(item);
                    }}
                  >
                    <span
                      className={`${
                        sortType.name === item.name ? "font-[700]" : ""
                      } whitespace-nowrap overflow-hidden text-ellipsis flex-1 cursor-pointer`}
                    >
                      {item.name}
                    </span>
                    {sortType.name === item.name && (
                      <img
                        src={iconCheck}
                        alt=""
                        className="w-[24px] h-[24px] max-w-[unset]"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SortProduct;
