interface Props {
  handleNextPage: () => void;
}

const BtnXemThem = ({ handleNextPage }: Props) => {
  return (
    <div className="flex justify-center w-full pb-[2.4rem] pt-[0.8rem]">
      <div className="sm-100 md-50 lg-50 xl-33_33 w-full px-[0.4rem]">
        <button
          onClick={handleNextPage}
          className="font-[700] px-[1.6rem] py-[1rem] w-full cursor-pointer bg-white text-[#3f4b53] rounded-[4px] flex items-center justify-center border-white border-[1px] hover:bg-[#fafafa] active:bg-[#f2f3f4]"
        >
          <span className="text-[14px] leading-[1.29]">Xem thêm</span>
        </button>
      </div>
    </div>
  );
};

export default BtnXemThem;
