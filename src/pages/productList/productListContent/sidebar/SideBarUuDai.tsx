import { useState } from "react";
import iconDownArrow from "../../../../assets/svg/downArrow.svg";
import iconAdd from "../../../../assets/svg/iconAdd.svg";
import iconSub from "../../../../assets/svg/iconSub.svg";
import inputIsChecked from "../../../../assets/svg/inputIsChecked.svg";
import inputUnChecked from "../../../../assets/svg/inputUnChecked.svg";
import { AttributeValue, IDataFilter } from "../../../../@Types/Types";
import { useSearchParams } from "react-router-dom";
interface Props {
  dataFilter: IDataFilter[];
}

const SideBarUuDai = ({ dataFilter }: Props) => {
  const [search, setSearch] = useSearchParams();
  const paramConfig = Object.fromEntries([...search]);
  const [showMore, setShowMore] = useState(true);
  const [btnShow, setBtnShow] = useState(false);
  let countItem = 0;
  const data = dataFilter.filter(
    (item) => item.attribute_term === "GeneralTerm"
  );
  let totalAttribute_value: AttributeValue[] = [];
  data.forEach((item) => {
    item.attribute_value?.forEach((item) => {
      totalAttribute_value = [...totalAttribute_value, item];
    });
  });

  const isInputChecked = (
    attribute_key: string,
    value?: number | undefined
  ) => {
    const param = paramConfig[attribute_key];
    const paramList = param ? param.split(",") : [];
    if (value) {
      return paramList.includes(value.toString());
    } else {
      return false;
    }
  };

  // useEffect(() => {
  //   console.log(paramConfig);
  // }, [paramConfig]);
  const handleCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    attribute_key: string,
    value: number | undefined
  ) => {
    let param: string | undefined = paramConfig[attribute_key];
    //chuyển param string thành mảng
    let paramList = param ? param.split(",") : [];
    if (e.target.checked && value) {
      //add thêm value cho param
      paramList.push(value.toString());
      search.set(attribute_key, paramList.join(","));
    } else {
      //xóa value khỏi param
      paramList = paramList.filter(
        (item) => value && item !== value.toString()
      );
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
          Ưu đãi
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

      {totalAttribute_value.length > 0 && showMore && (
        <div className="flex flex-col overflow-hidden mt-[0.8rem]">
          {data.map((item) =>
            item.attribute_value?.map((itemAtt) => {
              countItem++;

              if (countItem > 4 && !btnShow) return null;

              return (
                <div
                  className="flex items-center rounded-[4px] pl-[1.2rem] pr-[0.8rem] py-[0.4rem] hover:bg-[#f2f3f4] hover:font-[700] cursor-pointer max-h-[3.2rem]"
                  key={countItem}
                >
                  <img
                    src={
                      isInputChecked(item.attribute_key ?? "", itemAtt.value)
                        ? inputIsChecked
                        : inputUnChecked
                    }
                    alt=""
                    className="w-[24px] mr-[0.8rem]"
                  />
                  <label
                    className={`${
                      isInputChecked(item.attribute_key ?? "", itemAtt.value)
                        ? "font-[700]"
                        : ""
                    } text-[#3f4b53] cursor-pointer w-full flex items-center h-[24px] overflow-hidden `}
                    htmlFor={`${item.attribute_term}${countItem}`}
                  >
                    <span className=" whitespace-nowrap text-ellipsis overflow-hidden">
                      {itemAtt.name}
                    </span>
                  </label>
                  <input
                    className="hidden"
                    type="checkbox"
                    id={`${item.attribute_term}${countItem}`}
                    value={itemAtt.value}
                    checked={isInputChecked(
                      item.attribute_key ?? "",
                      itemAtt.value
                    )}
                    onChange={(e) => {
                      handleCheckBox(
                        e,
                        item.attribute_key ?? "",
                        itemAtt.value
                      );
                    }}
                  />
                </div>
              );
            })
          )}

          {totalAttribute_value.length > 4 && (
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

export default SideBarUuDai;
