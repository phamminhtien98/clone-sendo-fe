import notResultImg from "../../../../assets/ImgProducts/notResultImg.png";

const NotResult = () => {
  return (
    <div className="flex flex-col items-center py-[4.8rem] text-[#0f1e29] leading-[2.2rem]">
      <img
        className="h-[24rem] w-auto align-middle"
        src={notResultImg}
        alt=""
      />
      <span className="mt-[2.4rem] font-[700] text-[16px]">
        Tiếc quá! Không thấy sản phẩm này
      </span>
      <span className="mt-[0.8rem] font-[400] text-[14px]">
        Thử nhập lại từ khóa tìm kiếm bạn nhé.
      </span>
    </div>
  );
};

export default NotResult;
