import { useEffect, useState } from "react";
import iconDownArrow from "../../../../assets/svg/downArrow.svg";
import iconAdd from "../../../../assets/svg/iconAdd.svg";
import iconSub from "../../../../assets/svg/iconSub.svg";
import { IDataFilter } from "../../../../@Types/Types";
import { useSearchParams } from "react-router-dom";
interface Props {
  dataFilter: IDataFilter[];
  attribute_key: string;
}
const SideBarKhoangGia = ({ dataFilter, attribute_key }: Props) => {
  const [showMore, setShowMore] = useState(true);
  const [search, setSearch] = useSearchParams();
  const paramConfig = Object.fromEntries([...search]);
  const [btnShow, setBtnShow] = useState(false);
  const [btnLook, setBtnLook] = useState(false);
  const [giaThap, setGiaThap] = useState<number | null>(null);
  const [giaCao, setGiaCao] = useState<number | null>(null);
  const data = dataFilter.filter(
    (item) => item.attribute_key === attribute_key
  );

  useEffect(() => {
    if (giaThap && giaCao && Number(giaThap) < Number(giaCao)) {
      setBtnLook(true);
    } else if ((giaThap && !giaCao) || (!giaThap && giaCao)) {
      setBtnLook(true);
    } else {
      setBtnLook(false);
      search.delete("gtprice");
      search.delete("ltprice");
    }
    setSearch(search, { replace: true });
  }, [giaThap, giaCao]);

  const HandleBtnApDung = () => {
    if (giaThap) {
      search.set("gtprice", `${giaThap}`);
    } else {
      search.delete("gtprice");
    }
    if (giaCao) {
      search.set("ltprice", `${giaCao}`);
    } else {
      search.delete("ltprice");
    }
    setSearch(search, { replace: true });
  };

  const HandleSelectPrice = (
    ltprice: number | undefined,
    gtprice: number | undefined
  ) => {
    const paramGtprice = paramConfig.gtprice;
    const paramLtprice = paramConfig.ltprice;
    if (
      (gtprice === -1 &&
        paramGtprice === undefined &&
        paramLtprice === `${ltprice}`) ||
      (ltprice === -1 &&
        paramLtprice === undefined &&
        paramGtprice === `${gtprice}`) ||
      (paramGtprice &&
        paramLtprice &&
        paramGtprice === `${gtprice}` &&
        paramLtprice === `${ltprice}`)
    ) {
      search.delete("gtprice");
      search.delete("ltprice");
      setGiaCao(null);
      setGiaThap(null);
    } else {
      if (gtprice && gtprice > 0) {
        search.set("gtprice", `${gtprice}`);
      } else {
        search.delete("gtprice");
      }
      if (ltprice && ltprice > 0) {
        search.set("ltprice", `${ltprice}`);
      } else {
        search.delete("ltprice");
      }
      if (ltprice) setGiaCao(ltprice < 0 ? null : ltprice);
      if (gtprice) setGiaThap(gtprice < 0 ? null : gtprice);
    }
    setSearch(search, { replace: true });
  };

  const IsActive: (
    gtprice: number | undefined,
    ltprice: number | undefined
  ) => boolean = (gtprice: number | undefined, ltprice: number | undefined) => {
    const paramGtprice = paramConfig.gtprice;
    const paramLtprice = paramConfig.ltprice;
    if (
      (gtprice &&
        gtprice === -1 &&
        paramGtprice === undefined &&
        paramLtprice === `${ltprice}`) ||
      (ltprice &&
        ltprice === -1 &&
        paramLtprice === undefined &&
        paramGtprice === `${gtprice}`) ||
      (paramGtprice &&
        paramLtprice &&
        paramGtprice === `${gtprice}` &&
        paramLtprice === `${ltprice}`)
    ) {
      return true;
    } else {
      return false;
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
        <div className={`flex flex-col overflow-hidden px-[1.2rem]`}>
          <div className="flex flex-col w-full text-[#6f787e] pt-[0.8rem] pb-[1.2rem]">
            <div className="flex">
              <div className="flex flex-col">
                <span className="mb-[0.8rem]">Thấp nhất</span>
                <input
                  className="w-full p-[0.8rem] leading-[1.4rem] border-[#cfd2d4] border-[1px] rounded-[4px] hover:border-[#007aff] "
                  type="number"
                  value={giaThap !== null ? giaThap : ""}
                  onChange={(e) => {
                    setGiaThap(
                      e.target.value !== "" ? Number(e.target.value) : null
                    );
                  }}
                />
              </div>
              <div className="mt-auto mb-[8px] mx-[0.4rem]">
                <span>-</span>
              </div>
              <div className="flex flex-col">
                <span className="mb-[0.8rem]">Cao nhất</span>
                <input
                  className="w-full p-[0.8rem] leading-[1.4rem] border-[#cfd2d4] border-[1px] rounded-[4px] hover:border-[#007aff] "
                  type="number"
                  value={giaCao !== null ? giaCao : ""}
                  onChange={(e) => {
                    setGiaCao(
                      e.target.value !== "" ? Number(e.target.value) : null
                    );
                  }}
                />
              </div>
            </div>
            <button
              className={`min-h-[2.4rem] font-[700] py-[0.4rem] mt-[0.8rem] rounded-[4px] text-[12px] transition-all duration-300 ease-linear ${
                btnLook
                  ? "cursor-pointer bg-[#ee2624] text-white hover:bg-[#f1514f]"
                  : "cursor-not-allowed bg-[#f2f3f4] text-[#b7bbbf]"
              }`}
              onClick={HandleBtnApDung}
            >
              Áp dụng
            </button>
          </div>

          {data[0].attribute_value.map((item, index) => {
            if (index > 3 && !btnShow) return null;

            return (
              <span
                key={index}
                className="flex items-center h-[3.2rem] p-[0.8rem] rounded-[4px] bg-[#f2f3f4] mb-[0.8rem] cursor-pointer hover:font-[700] hover:bg-[#e7e8ea]"
                style={
                  IsActive(item.gtprice, item.ltprice)
                    ? { border: "1px solid #ee2624", fontWeight: "700" }
                    : {}
                }
                onClick={() => {
                  HandleSelectPrice(item.ltprice, item.gtprice);
                }}
              >
                {item.gtprice && item.ltprice === -1
                  ? `Dưới ${item.ltprice / 1000}K`
                  : item.ltprice && item.gtprice === -1
                  ? `Trên ${item.gtprice / 1000}K`
                  : item.gtprice && item.ltprice
                  ? `${item.gtprice / 1000}K - ${item.ltprice / 1000}K`
                  : ""}
              </span>
            );
          })}

          {data[0].attribute_value.length > 4 && (
            <div
              className="flex justify-center"
              onClick={() => {
                setBtnShow(!btnShow);
              }}
            >
              <button className="px-[0.7rem] py-[0.6rem] cursor-pointer mt-[0.8rem] text-[#3f4b53] rounded-[4px] flex">
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

export default SideBarKhoangGia;
