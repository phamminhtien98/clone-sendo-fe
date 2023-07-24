import { useLocation } from "react-router-dom";
import { Categories } from "../../../../@Types/Types";
import { categories as getCategories } from "../../../../data/Categories";
import { useState, useEffect } from "react";
const categories = getCategories;
const findCategoryName = (categories: Categories[], key: string) => {
  let categoryName = "Sendo";
  let found = false;

  const searchCategories = (categories: Categories[]) => {
    categories.forEach((item) => {
      if (found) {
        return;
      }
      if (item.cate_path === key) {
        categoryName = item.name;
        found = true;
      } else if (item.sub_category) {
        searchCategories(item.sub_category);
      }
    });
  };

  searchCategories(categories);

  return categoryName;
};

const TopTitle = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [selectSearch, setSelectSearch] = useState("sen-do");
  const [categoryName, setcategoryName] = useState("Sendo");

  useEffect(() => {
    setcategoryName(findCategoryName(categories, path));
    setSelectSearch(path);
  }, [location]);
  return (
    <div className="text-[#0f1e29] flex items-center min-h-[2.4rem]">
      <span className="font-[700] text-[20px] leading-[2.2rem] tracking-[0.015rem]">
        {categoryName}
      </span>
      <span className="ml-[0.8rem] font-[400] text-[14px] leading-[1.8rem]">
        Tìm thấy hơn 10.000 sản phẩm
      </span>
    </div>
  );
};

export default TopTitle;
