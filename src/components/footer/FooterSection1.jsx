import { Link } from "react-router-dom";
import sieunhieuhangtot from "../../assets/imagesFooter/sieunhieuhangtot.png";
import sieuyentam from "../../assets/imagesFooter/sieuyentam.png";
import sieutienloi from "../../assets/imagesFooter/sieutienloi.png";
import sieutietkiem from "../../assets/imagesFooter/sieutietkiem.png";
const FooterSection1 = () => {
  return (
    <section className=" bg-white">
      <div className="px-[2.4rem] containerct">
        <div className="px-[1.6rem] py-[1.6rem] grid grid-cols-2 lg:grid-cols-4 text-center">
          <Link
            to={""}
            className="text-[#0f1e29] py-[0.8rem] flex flex-col items-center"
          >
            <img
              src={sieunhieuhangtot}
              alt=""
              className="h-[8.8rem] w-[13rem] mb-[1.2rem]"
            />
            <div className="flex flex-col max-w-[21rem]">
              <span className="mb-[0.4rem] font-[700] text-[12px] leading-[1.6rem]">
                Siêu nhiều hàng tốt
              </span>
              <span className="font-[400] text-[12px] leading-[1.6rem] text-[#6f787e]">
                Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm
              </span>
            </div>
          </Link>
          <Link
            to={""}
            className="text-[#0f1e29] py-[0.8rem] flex flex-col items-center"
          >
            <img
              src={sieuyentam}
              alt=""
              className="h-[8.8rem] w-[13rem] mb-[1.2rem]"
            />
            <div className="flex flex-col max-w-[21rem]">
              <span className="mb-[0.4rem] font-[700] text-[12px] leading-[1.6rem]">
                Siêu yên tâm
              </span>
              <span className="font-[400] text-[12px] leading-[1.6rem] text-[#6f787e]">
                Miễn phí đổi trả 48h
              </span>
            </div>
          </Link>
          <Link
            to={""}
            className="text-[#0f1e29] py-[0.8rem] flex flex-col items-center"
          >
            <img
              src={sieutienloi}
              alt=""
              className="h-[8.8rem] w-[13rem] mb-[1.2rem]"
            />
            <div className="flex flex-col max-w-[21rem]">
              <span className="mb-[0.4rem] font-[700] text-[12px] leading-[1.6rem]">
                Siêu tiện lợi
              </span>
              <span className="font-[400] text-[12px] leading-[1.6rem] text-[#6f787e]">
                Mang thế giới mua sắm của Sendo trong tầm tay bạn
              </span>
            </div>
          </Link>
          <Link
            to={""}
            className="text-[#0f1e29] py-[0.8rem] flex flex-col items-center"
          >
            <img
              src={sieutietkiem}
              alt=""
              className="h-[8.8rem] w-[13rem] mb-[1.2rem]"
            />
            <div className="flex flex-col max-w-[21rem]">
              <span className="mb-[0.4rem] font-[700] text-[12px] leading-[1.6rem]">
                Siêu tiết kiệm
              </span>
              <span className="font-[400] text-[12px] leading-[1.6rem] text-[#6f787e]">
                Giá hợp lý, vừa túi tiền. Luôn có nhiều chương trình khuyến mãi
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterSection1;
