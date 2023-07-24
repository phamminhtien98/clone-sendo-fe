import { Link, NavLink } from "react-router-dom";
import iconDownArrow from "../../../../assets/svg/downArrow.svg";
import iconAdd from "../../../../assets/svg/iconAdd.svg";
import iconSub from "../../../../assets/svg/iconSub.svg";
import { useState } from "react";
import { Categories } from "../../../../@Types/Types";
interface Props {
  categories: Categories[];
  handleSelectCategory: (category: Categories) => void;
}
interface Props2 {
  category: Categories;
  handleSelectCategory: (category: Categories) => void;
}

const CategoriesChil = ({ category, handleSelectCategory }: Props2) => {
  const [showMoreSubMenu, setShowMoreSubMenu] = useState(false);
  return (
    <>
      <NavLink
        to={`/${category.cate_path}`}
        className={({ isActive }) =>
          isActive ? "text-[#ee2624] font-[700]" : ""
        }
        onClick={() => {
          handleSelectCategory(category);
        }}
      >
        {({ isActive }) => (
          <div className=" max-h-[3.16rem] px-[0.8rem] py-[0.4rem] flex items-center hover:bg-[#f2f3f4] hover:font-[700] rounded-[4px] cursor-pointer">
            {category.sub_category && (
              <button
                className="p-[0.5rem] rounded-[4px] border-white border-[1px]"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setShowMoreSubMenu(!showMoreSubMenu);
                }}
              >
                <svg
                  className={`max-w-[12px] h-[12px] ${
                    showMoreSubMenu ? "rotate-180" : ""
                  }`}
                  style={{ fill: `${isActive ? "#ee2624" : ""}` }}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <path d="M12 13.214 17.524 8 19 9.393 12 16 5 9.393 6.476 8z"></path>
                </svg>
              </button>
            )}

            <span
              className={`text-[14px] ml-[0.4rem] whitespace-nowrap overflow-hidden text-ellipsis flex-1`}
            >
              {category.name}
            </span>
          </div>
        )}
      </NavLink>
      {category.sub_category &&
        showMoreSubMenu &&
        category.sub_category.map((category, index) => (
          <div className="flex flex-col pl-[3.6rem]" key={index}>
            <CategoriesChil
              category={category}
              handleSelectCategory={handleSelectCategory}
            />
          </div>
        ))}
    </>
  );
};

const CategoriesParent = ({ category, handleSelectCategory }: Props2) => {
  const [showMoreSubMenu, setShowMoreSubMenu] = useState(true);
  const [btnShow, setBtnShow] = useState(false);
  return (
    <>
      <div className="">
        <NavLink
          to={`/${category.cate_path}`}
          className={({ isActive }) =>
            isActive ? "text-[#ee2624] font-[700]" : ""
          }
          onClick={() => {
            handleSelectCategory(category);
          }}
        >
          {({ isActive }) => (
            <div className="max-h-[3.16rem] px-[0.8rem] py-[0.4rem] flex items-center hover:bg-[#f2f3f4] rounded-[4px] cursor-pointer">
              <button
                className="p-[0.5rem] rounded-[4px] border-white border-[1px]"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setShowMoreSubMenu(!showMoreSubMenu);
                }}
              >
                <svg
                  className={`max-w-[12px] h-[12px] ${
                    showMoreSubMenu ? "rotate-180" : ""
                  }`}
                  style={{ fill: `${isActive ? "#ee2624" : ""}` }}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <path d="M12 13.214 17.524 8 19 9.393 12 16 5 9.393 6.476 8z"></path>
                </svg>
              </button>
              <span
                className={`font-[700] text-[14px] ml-[0.4rem] whitespace-nowrap overflow-hidden text-ellipsis flex-1`}
              >
                {category.name}
              </span>
            </div>
          )}
        </NavLink>
        {category.sub_category && showMoreSubMenu && (
          <div className="flex flex-col pl-[1.2rem]">
            {category.sub_category.map((category, index) => {
              return index < 6 ? (
                <div key={index}>
                  <CategoriesChil
                    category={category}
                    handleSelectCategory={handleSelectCategory}
                  />
                </div>
              ) : (
                btnShow && (
                  <div key={index}>
                    <CategoriesChil
                      category={category}
                      handleSelectCategory={handleSelectCategory}
                    />
                  </div>
                )
              );
            })}

            {category.sub_category.length > 6 && (
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
    </>
  );
};

const SidebarCategories = ({ categories, handleSelectCategory }: Props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="py-[1.2rem] px-[0.4rem]">
      <div className="flex justify-between items-center">
        <span className="text-[#0f1e29] font-[700] ml-[1.2rem] text-[14px] leading-[1.8rem]">
          Danh mục
        </span>
        <button
          className="p-[0.7rem] hover:bg-[#f2f3f4] rounded-[4px] border-white border-[1px]"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          <img
            src={iconDownArrow}
            alt=""
            className={`w-[16px] h-[16px] ${showMore ? "" : "rotate-180"}`}
          />
        </button>
      </div>

      <div
        className={`flex flex-col overflow-hidden ${showMore ? "hidden" : ""}`}
      >
        <Link
          to={""}
          className="px-[1.2rem] py-[0.8rem] text-[14px] font-[400] leading-[1.8rem] text-[#0f62fe] "
        >
          Về trang tất cả danh mục
        </Link>
        {categories.map((category, index) => (
          <CategoriesParent
            key={index}
            category={category}
            handleSelectCategory={handleSelectCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarCategories;
