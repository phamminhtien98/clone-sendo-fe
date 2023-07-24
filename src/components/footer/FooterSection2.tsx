import { Link } from "react-router-dom";
import googleplay from "../../assets/imagesFooter/0ZARLASzVrfL92924rzW.png";
import appstore from "../../assets/imagesFooter/5lUTWdk3DXr8nlC9MDII.png";
import appgallery from "../../assets/imagesFooter/AMV086JNpEbm4OGAvVng.png";
const FooterSection2 = () => {
  return (
    <section className="containerct py-[2.4rem] bg-[#f2f3f4]">
      <div className="grid grid-cols-4">
        <div className="flex flex-col">
          <span className="mb-[1.2rem] font-[700] text-[12px] leading-[1.6rem]">
            VỀ CHÚNG TÔI
          </span>
          <Link
            to={""}
            className="font-[400] text-[12px] text-[#0f1e29] max-w-[20rem] mb-[0.8rem] leading-[1.6rem]"
          >
            Giới thiệu Sendo.vn
          </Link>
          <Link
            to={""}
            className="font-[400] text-[12px] text-[#0f1e29] max-w-[20rem] mb-[0.8rem] leading-[1.6rem]"
          >
            Giới thiệu SenMall
          </Link>
          <Link
            to={""}
            className="font-[400] text-[12px] text-[#0f1e29] max-w-[20rem] mb-[0.8rem] leading-[1.6rem]"
          >
            Quy chế hoạt động
          </Link>
          <Link
            to={""}
            className="font-[400] text-[12px] text-[#0f1e29] max-w-[20rem] mb-[0.8rem] leading-[1.6rem]"
          >
            Chính sách bảo mật
          </Link>
          <Link
            to={""}
            className="font-[400] text-[12px] text-[#0f1e29] max-w-[20rem] mb-[0.8rem] leading-[1.6rem]"
          >
            Giao hàng và Nhận hàng
          </Link>
        </div>
        <div className="flex flex-col">
          <span className="mb-[1.2rem] font-[700] text-[12px] leading-[1.6rem]">
            DÀNH CHO NGƯỜI MUA
          </span>
          <Link
            to={""}
            className="font-[400] text-[12px] text-[#0f1e29] max-w-[20rem] mb-[0.8rem] leading-[1.6rem]"
          >
            Giải quyết khiếu nại
          </Link>
          <Link
            to={""}
            className="font-[400] text-[12px] text-[#0f1e29] max-w-[20rem] mb-[0.8rem] leading-[1.6rem]"
          >
            Hướng dẫn mua hàng
          </Link>
          <Link
            to={""}
            className="font-[400] text-[12px] text-[#0f1e29] max-w-[20rem] mb-[0.8rem] leading-[1.6rem]"
          >
            Chính sách đổi trả
          </Link>
          <Link
            to={""}
            className="font-[400] text-[12px] text-[#0f1e29] max-w-[20rem] mb-[0.8rem] leading-[1.6rem]"
          >
            Chăm sóc khách hàng
          </Link>
          <Link
            to={""}
            className="font-[400] text-[12px] text-[#0f1e29] max-w-[20rem] mb-[0.8rem] leading-[1.6rem]"
          >
            Nạp tiền điện thoại
          </Link>
        </div>
        <div className="flex flex-col">
          <span className="mb-[1.2rem] font-[700] text-[12px] leading-[1.6rem]">
            DÀNH CHO NGƯỜI BÁN
          </span>
          <Link
            to={""}
            className="font-[400] text-[12px] text-[#0f1e29] max-w-[20rem] mb-[0.8rem] leading-[1.6rem]"
          >
            Quy định đối với người bán
          </Link>
          <Link
            to={""}
            className="font-[400] text-[12px] text-[#0f1e29] max-w-[20rem] mb-[0.8rem] leading-[1.6rem]"
          >
            Chính sách bán hàng
          </Link>
          <Link
            to={""}
            className="font-[400] text-[12px] text-[#0f1e29] max-w-[20rem] mb-[0.8rem] leading-[1.6rem]"
          >
            Hệ thống tiêu chí kiểm duyệt
          </Link>
          <Link
            to={""}
            className="font-[400] text-[12px] text-[#0f1e29] max-w-[20rem] mb-[0.8rem] leading-[1.6rem]"
          >
            Mở shop trên Sendo
          </Link>
        </div>
        <div className="flex flex-col">
          <span className="mb-[1.2rem] font-[700] text-[12px] leading-[1.6rem]">
            TẢI ỨNG DỤNG SENDO
          </span>
          <Link
            to={""}
            className="font-[400] text-[12px] text-[#0f1e29] max-w-[20rem] mb-[0.8rem] leading-[1.6rem]"
          >
            Mang thế giới mua sắm của Sendo trong tầm tay bạn
          </Link>
          <div className="flex flex-wrap">
            <Link to={""}>
              <img
                src={appstore}
                alt=""
                className="w-[12rem] h-[4rem] mr-[0.8rem] mt-[0.8rem]"
              />
            </Link>
            <Link to={""}>
              <img
                src={googleplay}
                alt=""
                className="w-[12rem] h-[4rem] mr-[0.8rem] mt-[0.8rem]"
              />
            </Link>
            <Link to={""}>
              <img
                src={appgallery}
                alt=""
                className="w-[12rem] h-[4rem] mr-[0.8rem] mt-[0.8rem]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection2;
