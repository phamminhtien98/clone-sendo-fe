import React from "react";
import { NavLink } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div className="flex h-[32px] text-[#6f787e] ]">
      <ul className="flex items-center">
        <li className="text-[14px] pr-[0.8rem] text-[#0f62fe]">
          <NavLink to={""}>Sendo.vn</NavLink>
        </li>
        <li className="text-[11px] pr-[0.8rem] leading-[1]">
          <span>/</span>
        </li>
        <li className="text-[14px] pr-[0.8rem]">
          <NavLink to={""}>Sách & Văn phòng phẩm</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
