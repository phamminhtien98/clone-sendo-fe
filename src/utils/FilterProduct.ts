import { IParamsConfig } from "../@Types/Types";
import unidecode from "unidecode";

const FilterProduct = {
  findProductById(dataProductList: any[], categoriId: number) {
    return dataProductList.filter((item) =>
      item.item?.category_ids?.includes(categoriId)
    );
  },

  sortBanChay(dataProductList: any[]) {
    return dataProductList.sort((a, b) => {
      if (a.item?.order_count && b.item?.order_count) {
        return a.item.order_count - b.item.order_count;
      } else if (a.item?.order_count) {
        return -1; // Đưa phần tử không có final_price xuống cuối
      } else if (b.item?.order_count) {
        return 1; // Đưa phần tử không có final_price xuống cuối
      } else {
        return 0;
      }
    });
  },
  sortKhuyenMai(dataProductList: any[]) {
    return dataProductList.sort((a, b) => {
      if (a.item?.promotion_percentage && b.item?.promotion_percentage) {
        return b.item.promotion_percentage - a.item.promotion_percentage;
      } else if (a.item?.promotion_percentage) {
        return -1; // Đưa phần tử không có final_price xuống cuối
      } else if (b.item?.promotion_percentage) {
        return 1; // Đưa phần tử không có final_price xuống cuối
      } else {
        return 0;
      }
    });
  },
  sortDanhGia(dataProductList: any[]) {
    return dataProductList.sort((a, b) => {
      if (a.item?.rating_percent && b.item?.rating_percent) {
        return Number(b.item.rating_percent) - Number(a.item.rating_percent);
      } else if (a.item?.rating_percent) {
        return -1; // Đưa phần tử không có final_price xuống cuối
      } else if (b.item?.rating_percent) {
        return 1; // Đưa phần tử không có final_price xuống cuối
      } else {
        return 0;
      }
    });
  },

  filterProduct(dataProductList: any[], paramConfig: IParamsConfig) {
    return dataProductList.filter((item) => {
      if (
        //lọc địa điểm
        (paramConfig.shop_warehouse_city_id === undefined ||
          paramConfig.shop_warehouse_city_id
            ?.split(",")
            .includes(`${item.item?.shop_warehouse_city_id}`)) &&
        //lọc phương thức vận chuyển
        //hỏa tốc
        (paramConfig.is_using_in_day === undefined ||
          `${item.item?.is_using_in_day}` === paramConfig.is_using_in_day) &&
        //nhanh
        (paramConfig.is_using_instant === undefined ||
          `${item.item?.is_using_instant}` === paramConfig.is_using_instant) &&
        //tiêu chuẩn
        (paramConfig.is_using_standard === undefined ||
          `${item.item?.is_using_standard}` ===
            paramConfig.is_using_standard) &&
        //lọc loại shop
        //shop mall
        (paramConfig.shop_type === undefined ||
          item.item?.shop_badge_urls?.some(
            (badge: { type: string }) => badge.type === "shop_mall"
          )) &&
        //shop plus
        (paramConfig.is_shop_plus === undefined ||
          item.item?.shop_badge_urls?.some(
            (badge: { type: string }) => badge.type === "shop_plus"
          )) &&
        (paramConfig.is_self_shipping === undefined ||
          item.item?.shop_badge_urls?.some(
            (badge: { type: string }) => badge.type === "self_shipping"
          )) &&
        //shop uy tín lọc theo số lượng bán >10 sản phẩm
        (paramConfig.is_certified === undefined ||
          (item.item?.order_count && item.item?.order_count >= 10)) &&
        //Lọc ưu đãi
        // lọc back to school (category đụng cụ học sinh)
        (paramConfig.campaign_id === undefined ||
          (paramConfig.campaign_id.split(",").includes(`187`) &&
            item.item?.category_id &&
            item.item.category_ids.includes(2328)) ||
          //khuyến mãi shop plus (thuộc shoplus và có giảm giá)
          (paramConfig.campaign_id.split(",").includes(`183`) &&
            item.item?.shop_badge_urls?.some(
              (badge: { type: string }) => badge.type === "shop_plus"
            ) &&
            item.item?.promotion_percentage &&
            item.item?.promotion_percentage > 0)) &&
        //lọc mega voucher
        (paramConfig.is_mega_voucher === undefined ||
          item.item?.event_banners?.some(
            (badge: { type: string }) => badge.type === "mega-voucher"
          )) &&
        //lọc flash sale
        (paramConfig.is_flash_sale === undefined ||
          item.item?.event_banners?.some(
            (badge: { type: string }) => badge.type === "flash-sale"
          )) &&
        //mua trước trả sau ()
        (paramConfig.is_pay_later === undefined ||
          item.item?.promotion_sub_message?.type === "pay_later") &&
        //mua trước trả sau ()
        (paramConfig.is_combo_discount === undefined ||
          item.item?.event_banners?.some(
            (badge: { type: string }) => badge.type === "combo_discount"
          )) &&
        //mua nhiều giảm giá ()
        (paramConfig.is_quantity_discount === undefined ||
          item.item?.event_banners?.some(
            (badge: { type: string }) => badge.type === "quantity_discount"
          )) &&
        //Khuyến mãi ()
        (paramConfig.is_promotion === undefined ||
          item.item?.is_in_promotion) &&
        //free ship ()
        (paramConfig.is_shipping_discount === undefined ||
          item.item?.event_banners?.some(
            (badge: { type: string }) => badge.type === "free-ship"
          )) &&
        //Khuyến mãi app ()
        (paramConfig.promotion_app === undefined ||
          item.item?.app_discount_percentage) &&
        //trả góp 0% ()
        (paramConfig.is_installment === undefined ||
          item.item?.is_installment) &&
        //khoảng giá thấp nhất ()
        (paramConfig.gtprice === undefined ||
          (item.item?.final_price &&
            item.item?.final_price >= Number(paramConfig.gtprice))) &&
        //khoảng giá cao nhất()
        (paramConfig.ltprice === undefined ||
          (item.item?.final_price &&
            item.item?.final_price <= Number(paramConfig.ltprice))) &&
        //đánh giá thấp nhất ()
        (paramConfig.gte_rating_percent === undefined ||
          (item.item?.rating_percent &&
            item.item?.rating_percent >=
              Number(paramConfig.gte_rating_percent))) &&
        //đánh giá cao nhất ()
        (paramConfig.lte_rating_percent === undefined ||
          (item.item?.rating_percent &&
            item.item?.rating_percent <=
              Number(paramConfig.lte_rating_percent))) &&
        //Loại đĩa ()
        (paramConfig.loai_dia === undefined ||
          item.item?.loai_dia?.includes(paramConfig.loai_dia)) &&
        //Loại sách ()
        (paramConfig.loai_sac === undefined ||
          item.item?.loai_sac?.includes(paramConfig.loai_sac)) &&
        //Ngôn ngữ ()
        (paramConfig.ngon_ngu === undefined ||
          item.item?.ngon_ngu?.includes(paramConfig.ngon_ngu)) &&
        //Nhà xuất bản ()
        (paramConfig.nha_xuat_ban === undefined ||
          item.item?.nha_xuat_ban?.includes(paramConfig.nha_xuat_ban)) &&
        //phiên bản ()
        (paramConfig.phien_ban === undefined ||
          item.item?.phien_ban?.includes(paramConfig.phien_ban)) &&
        //thể loại ()
        (paramConfig.the_loai === undefined ||
          item.item?.the_loai?.includes(paramConfig.the_loai)) &&
        //tình trạng sách ()
        (paramConfig.tinh_trang_sach === undefined ||
          item.item?.tinh_trang_sach?.includes(paramConfig.tinh_trang_sach)) &&
        //xuất sứ ()
        (paramConfig.xuat_xu === undefined ||
          item.item?.xuat_xu?.includes(paramConfig.xuat_xu)) &&
        //có video
        (paramConfig.is_video === undefined ||
          item.item?.img_highlight_urls?.some(
            (badge: { type: string }) => badge.type === "video"
          )) &&
        //tìm kiếm ()
        (paramConfig.q === undefined ||
          (item.item?.name &&
            unidecode(item.item.name)
              .toLowerCase()
              .includes(unidecode(paramConfig.q).toLowerCase())))
      ) {
        return true;
      }

      // Không có trường nào được định nghĩa trong paramConfig
      if (
        paramConfig.shop_warehouse_city_id === undefined &&
        paramConfig.is_using_in_day === undefined &&
        paramConfig.is_using_instant === undefined &&
        paramConfig.is_using_standard === undefined &&
        paramConfig.is_certified === undefined &&
        paramConfig.is_self_shipping === undefined &&
        paramConfig.is_shop_plus === undefined &&
        paramConfig.shop_type === undefined &&
        paramConfig.campaign_id === undefined &&
        paramConfig.is_mega_voucher === undefined &&
        paramConfig.is_flash_sale === undefined &&
        paramConfig.is_pay_later === undefined &&
        paramConfig.is_combo_discount === undefined &&
        paramConfig.is_quantity_discount === undefined &&
        paramConfig.is_promotion === undefined &&
        paramConfig.is_shipping_discount === undefined &&
        paramConfig.promotion_app === undefined &&
        paramConfig.is_installment === undefined &&
        paramConfig.gtprice === undefined &&
        paramConfig.ltprice === undefined &&
        paramConfig.gte_rating_percent === undefined &&
        paramConfig.lte_rating_percent === undefined &&
        paramConfig.loai_dia === undefined &&
        paramConfig.loai_sac === undefined &&
        paramConfig.ngon_ngu === undefined &&
        paramConfig.nha_xuat_ban === undefined &&
        paramConfig.phien_ban === undefined &&
        paramConfig.the_loai === undefined &&
        paramConfig.tinh_trang_sach === undefined &&
        paramConfig.xuat_xu === undefined &&
        paramConfig.is_video === undefined &&
        paramConfig.q === undefined
      ) {
        return true;
      }

      return false;
    });
  },
};

export default FilterProduct;
