import { Categories, IDataFilter } from "../../../../@Types/Types";
import SideBarCheckBox from "./SideBarCheckBox";
import SideBarCheckBoxEP from "./SideBarCheckBoxEP";
import SideBarDanhGia from "./SideBarDanhGia";
import SideBarKhoangGia from "./SideBarKhoangGia";
import SideBarUuDai from "./SideBarUuDai";
import SidebarCategories from "./SidebarCategories";

interface Props {
  categories: Categories[];
  handleSelectCategory: (category: Categories) => void;
  dataFilter: IDataFilter[];
}

const SideBar = ({ categories, handleSelectCategory, dataFilter }: Props) => {
  return (
    <div>
      <SidebarCategories
        categories={categories}
        handleSelectCategory={handleSelectCategory}
      />
      <hr className="h-[1px] text-[#0f1e29]" />
      <SideBarCheckBox
        dataFilter={dataFilter}
        attribute_key="shop_warehouse_city_id"
      />
      <hr className="h-[1px] text-[#0f1e29]" />
      <SideBarCheckBoxEP
        dataFilter={dataFilter}
        attribute_key="shipping_method"
      />
      <hr className="h-[1px] text-[#0f1e29]" />
      <SideBarCheckBoxEP dataFilter={dataFilter} attribute_key="shop_type" />
      <hr className="h-[1px] text-[#0f1e29]" />
      <SideBarUuDai dataFilter={dataFilter} />
      <hr className="h-[1px] text-[#0f1e29]" />
      <SideBarKhoangGia dataFilter={dataFilter} attribute_key="levelPrice" />
      <hr className="h-[1px] text-[#0f1e29]" />
      <SideBarDanhGia dataFilter={dataFilter} attribute_key="levelRating" />
      <hr className="h-[1px] text-[#0f1e29]" />
      {/* màu sắc */}
      <SideBarCheckBox dataFilter={dataFilter} attribute_key="loai_dia" />
      <hr className="h-[1px] text-[#0f1e29]" />
      <SideBarCheckBox
        dataFilter={dataFilter}
        attribute_key="tinh_trang_sach"
      />
      <hr className="h-[1px] text-[#0f1e29]" />
      <SideBarCheckBox dataFilter={dataFilter} attribute_key="xuat_xu" />
      <hr className="h-[1px] text-[#0f1e29]" />
      <SideBarCheckBox dataFilter={dataFilter} attribute_key="ngon_ngu" />
      <hr className="h-[1px] text-[#0f1e29]" />
      <SideBarCheckBox dataFilter={dataFilter} attribute_key="nha_xuat_ban" />
      <hr className="h-[1px] text-[#0f1e29]" />
      <SideBarCheckBox dataFilter={dataFilter} attribute_key="phien_ban" />
      <hr className="h-[1px] text-[#0f1e29]" />
      <SideBarCheckBox dataFilter={dataFilter} attribute_key="the_loai" />
      <hr className="h-[1px] text-[#0f1e29]" />
      <SideBarCheckBox dataFilter={dataFilter} attribute_key="loai_sac" />
      <hr className="h-[1px] text-[#0f1e29]" />
      <SideBarCheckBoxEP dataFilter={dataFilter} attribute_key="other_type" />
    </div>
  );
};

export default SideBar;
