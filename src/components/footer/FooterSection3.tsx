import { Link } from "react-router-dom";
import dadangky from "../../assets/imagesFooter/dadangky.png";
import noikhongvoihanggia from "../../assets/imagesFooter/noikhongvoihanggia.png";

const FooterSection3 = () => {
  return (
    <section className="bg-[#27343e] py-[2.4rem] text-white">
      <div className="containerct">
        <div className="flex justify-between">
          <div className="sm-41_67 flex flex-col items-stretch content-stretch">
            <span className="mb-[1.2rem] font-[700] text-[12px] leading-[1.6rem]">
              Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT
            </span>
            <span className="mb-[1.6rem] font-[400] text-[12px] leading-[1.6rem]">
              Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ
              20, ngày 26/04/2022.
            </span>
            <span className="mb-[1.6rem] font-[400] text-[12px] leading-[1.6rem]">
              Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.
            </span>
            <span className="mb-[1.6rem] font-[400] text-[12px] leading-[1.6rem]">
              Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường
              Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận Đông, Quận 7,
              Thành phố Hồ Chí Minh, Việt Nam.
            </span>
            <span className="font-[400] text-[12px] leading-[1.6rem]">
              Email:<Link to="mailto:lienhe@sendo.vn"> lienhe@sendo.vn</Link>
            </span>
            <div className="mt-[1.2rem] flex flex-wrap">
              <Link to={""}>
                <img src={dadangky} alt="" className="h-[3.3rem] mr-[2rem]" />
              </Link>
              <Link to={""}>
                <img src={noikhongvoihanggia} alt="" className="h-[3.3rem]" />
              </Link>
            </div>
          </div>
          <div className="sm-50 flex flex-col items-stretch content-stretch">
            <span className="mb-[1.2rem] font-[700] text-[12px] leading-[1.6rem]">
              Đăng ký nhận bản tin ưu đãi khủng từ Sendo
            </span>
            <form className="flex items-center w-full">
              <div className="sm-50 items-stretch content-stretch rounded-[4px] drop-shadow-[0_0_0_1px_transparent] bg-white">
                <div className="flex text-[14px] overflow-hidden w-full ">
                  <div className="flex">
                    <input
                      type="text"
                      inputMode="email"
                      placeholder="Email của bạn là"
                      className="bg-inherit border-none w-full leading-[1.4rem] text-[14px] p-[0.8rem]"
                    />
                  </div>
                </div>
              </div>
              <div className="sm-16_67 items-stretch content-stretch">
                <button
                  type="submit"
                  style={{ border: "1px solid #ee2624" }}
                  className="flex justify-center cursor-pointer font-[700] px-[1.6rem] py-[0.6rem] ml-[0.4rem] w-full bg-[#ee2624] text-[#fff] rounded-[4px]"
                >
                  <span className="text-[14px] leading-[1.29]">Đăng ký</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection3;
