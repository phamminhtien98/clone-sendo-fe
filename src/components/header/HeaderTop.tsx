import { Link } from "react-router-dom";
const HeaderTop = () => {
  return (
    <header className="h-[3.2rem]">
      <div className="containerct flex items-center h-[3.2rem]">
        <div className="flex justify-between items-center">
          <div className={`flex items-center`}>
            <Link to={""} className={`mr-[2.4rem]`}>
              <span className="text-[12px] font-[700]">Tải ứng dụng</span>
            </Link>
            <Link to={""} className="mr-[2.4rem]">
              <span>Chăm sóc khách hàng</span>
            </Link>
            <Link to={""}>
              <span>Kiểm tra đơn hàng</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
