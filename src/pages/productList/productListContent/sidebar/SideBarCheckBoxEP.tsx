import { useState } from "react";
import iconDownArrow from "../../../../assets/svg/downArrow.svg";
import iconAdd from "../../../../assets/svg/iconAdd.svg";
import iconSub from "../../../../assets/svg/iconSub.svg";
import { AttributeValue, IDataFilter } from "../../../../@Types/Types";
import { useSearchParams } from "react-router-dom";
import inputIsChecked from "../../../../assets/svg/inputIsChecked.svg";
import inputUnChecked from "../../../../assets/svg/inputUnChecked.svg";
interface Props {
  dataFilter: IDataFilter[];
  attribute_key: string;
}
const SideBarCheckBoxEP = ({ dataFilter, attribute_key }: Props) => {
  const [search, setSearch] = useSearchParams();
  const [showMore, setShowMore] = useState(true);
  const [btnShow, setBtnShow] = useState(false);
  const paramConfig = Object.fromEntries([...search]);
  const data = dataFilter.filter(
    (item) => item.attribute_key === attribute_key
  );

  const handleCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: AttributeValue
  ) => {
    if (item.search_key) {
      if (!e.target.checked) {
        search.delete(item.search_key);
      } else {
        search.set(item.search_key, `${item.value}`);
      }
      setSearch(search, { replace: true });
    }
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
        <div className={`flex flex-col overflow-hidden mt-[0.8rem]`}>
          {data[0].attribute_value &&
            data[0].attribute_value.map((item, index) => {
              if (index > 3 && !btnShow) return null;

              return (
                <div
                  className="flex items-center rounded-[4px] pl-[1.2rem] pr-[0.8rem] py-[0.4rem] hover:bg-[#f2f3f4] hover:font-[700] cursor-pointer max-h-[3.2rem]"
                  key={index}
                >
                  <img
                    src={
                      item.search_key && paramConfig[item.search_key]
                        ? inputIsChecked
                        : inputUnChecked
                    }
                    alt=""
                    className="w-[24px] mr-[0.8rem]"
                  />
                  <label
                    className={`${
                      item.search_key && paramConfig[item.search_key]
                        ? "font-[700]"
                        : ""
                    } text-[#3f4b53] cursor-pointer w-full flex items-center h-[24px]`}
                    htmlFor={item.search_key}
                  >
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.option_name}
                    </span>
                  </label>
                  <input
                    className="hidden"
                    type="checkbox"
                    name=""
                    id={item.search_key}
                    value={item.value}
                    onChange={(e) => {
                      handleCheckBox(e, item);
                    }}
                    checked={
                      item.search_key && paramConfig[item.search_key]
                        ? true
                        : false
                    }
                  />
                </div>
              );
            })}

          {data[0].attribute_value && data[0].attribute_value.length > 4 && (
            <div
              className="flex justify-center"
              onClick={() => {
                setBtnShow(!btnShow);
              }}
            >
              <button className="px-[0.7rem] py-[0.6rem] cursor-pointer mt-[0.8rem] text-[#3f4b53] rounded-[4px] flex items-center border-[1px] border-white">
                <img
                  src={btnShow ? iconSub : iconAdd}
                  alt=""
                  className="max-w-[16px] h-[16px]"
                />
                <span className="ml-[0.8rem] text-[14px] leading-[1.29] font-[700]">
                  {btnShow ? "Thu gọn" : "Xem thêm"}
                </span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SideBarCheckBoxEP;
