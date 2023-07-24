import { useState } from "react";
import iconDownArrow from "../../../../assets/svg/downArrow.svg";
import iconAdd from "../../../../assets/svg/iconAdd.svg";
import iconSub from "../../../../assets/svg/iconSub.svg";
import { IDataFilter } from "../../../../@Types/Types";
import { useSearchParams } from "react-router-dom";
import inputIsChecked from "../../../../assets/svg/inputIsChecked.svg";
import inputUnChecked from "../../../../assets/svg/inputUnChecked.svg";
interface Props {
  dataFilter: IDataFilter[];
  attribute_key: string;
}
const SideBarCheckBox = ({ dataFilter, attribute_key }: Props) => {
  const [search, setSearch] = useSearchParams();
  const [showMore, setShowMore] = useState(true);
  const [btnShow, setBtnShow] = useState(false);
  const paramConfig = Object.fromEntries([...search]);
  const data = dataFilter.filter(
    (item) => item.attribute_key === attribute_key
  );

  const isInputChecked = (
    attribute_key: string | undefined,
    value: number | string | undefined
  ) => {
    if (attribute_key) {
      const param = paramConfig[attribute_key];
      const paramList = param ? param.split(",") : [];
      return paramList.includes(`${value}`);
    } else {
      return false;
    }
  };

  const handleCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    attribute_key: string,
    value: number | undefined
  ) => {
    let param: string | undefined = paramConfig[attribute_key];
    //chuyển param string thành mảng
    let paramList = param ? param.split(",") : [];
    if (e.target.checked) {
      //add thêm value cho param
      paramList.push(`${value}`);
      search.set(attribute_key, paramList.join(","));
    } else {
      //xóa value khỏi param
      paramList = paramList.filter((item) => item !== `${value}`);
      if (paramList.length === 0) {
        //nếu mảng param ko còn phần tử xóa khỏi url
        search.delete(attribute_key);
      } else {
        //nếu mảng param còn phần tử sửa lại param trên url
        search.set(attribute_key, paramList.join(","));
      }
    }
    setSearch(search, { replace: true });
  };

  return (
    <div className="py-[1.2rem] px-[0.4rem]">
      <div className="flex justify-between items-center">
        <span className="text-[#0f1e29] font-[700] ml-[1.2rem] text-[14px] leading-[1.8rem]">
          {data[0].attribute_name}
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
      {data && data[0].attribute_value && showMore && (
        <div className={`flex flex-col overflow-hidden mt-[0.8rem]`}>
          {data &&
            data[0].attribute_value &&
            data[0].attribute_value.map((item, index) => {
              if (index > 3 && !btnShow) return null;

              return (
                <div
                  className="flex items-center rounded-[4px] pl-[1.2rem] pr-[0.8rem] py-[0.4rem] hover:bg-[#f2f3f4] hover:font-[700] cursor-pointer max-h-[3.2rem]"
                  key={index}
                >
                  <label
                    className={`${
                      isInputChecked(
                        data[0].attribute_key ?? "",
                        item.option_id
                      )
                        ? "font-[700]"
                        : ""
                    } text-[#3f4b53]  cursor-pointer w-full h-[24px] flex items-center`}
                    htmlFor={`${data[0].attribute_key}${item.option_id}`}
                  >
                    <img
                      src={
                        isInputChecked(
                          data[0].attribute_key ?? "",
                          item.option_id
                        )
                          ? inputIsChecked
                          : inputUnChecked
                      }
                      alt=""
                      className="w-[24px] mr-[0.8rem]"
                    />
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis leading-[1.6rem]">
                      {item.option_name}
                    </span>
                  </label>
                  <input
                    className="hidden"
                    type="checkbox"
                    name=""
                    id={`${data[0].attribute_key}${item.option_id}`}
                    value={item.option_id}
                    onChange={(e) => {
                      handleCheckBox(
                        e,
                        data[0].attribute_key ?? "",
                        item.option_id
                      );
                    }}
                    checked={isInputChecked(
                      data[0].attribute_key ?? "",
                      item.option_id
                    )}
                  />
                </div>
              );
            })}

          {data.length > 0 &&
            data[0].attribute_value &&
            data[0].attribute_value.length > 4 && (
              <div
                className="flex justify-center mt-[0.8rem] items-center"
                onClick={() => {
                  setBtnShow(!btnShow);
                }}
              >
                <button className="px-[0.7rem] py-[0.6rem] cursor-pointer text-[#3f4b53] rounded-[4px] flex items-center border-[1px] border-white">
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

export default SideBarCheckBox;
