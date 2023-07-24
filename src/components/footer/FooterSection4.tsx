import { Link } from "react-router-dom";
import downArrow from "../../assets/svg/downArrow.svg";
import { useState } from "react";
const FooterSection4 = () => {
  const topTimKiem = [
    {
      path: "dong-ho-phu-kien/",
      name: "\u0110\u1ed3ng H\u1ed3",
    },
    {
      path: "mall/",
      name: "SHOPPING Mall",
    },
    {
      path: "cong-nghe/",
      name: "Th\u1ebf Gi\u1edbi Di \u0110\u1ed9ng",
    },
    {
      path: "thuc-pham/",
      name: "B\u00e1nh Trung Thu Kinh \u0110\u00f4",
    },
    {
      path: "su-kien/black-friday/",
      name: "Black Friday",
    },
    {
      path: "tivi/",
      name: "Tivi",
    },
    {
      path: "my-pham/",
      name: "M\u1ef9 ph\u1ea9m h\u00e0n qu\u1ed1c",
    },
    {
      path: "kem-chong-nang/",
      name: "Kem ch\u1ed1ng n\u1eafng",
    },
    {
      path: "cho-tot.htm",
      name: "Ch\u1ee3 T\u1ed1t",
    },
    {
      path: "shopee-10k.htm",
      name: "Shopee",
    },
    {
      path: "su-kien/corona/",
      name: "Corona Virus",
    },
    {
      path: "do-choi-nau-an-buon-ban/",
      name: "\u0110\u1ed3 ch\u01a1i n\u1ea5u \u0103n",
    },
    {
      path: "laptop/",
      name: "Laptop",
    },
    {
      path: "iphone-cu/",
      name: "iPhone 6",
    },
    {
      path: "ban-phim-game-thu/",
      name: "B\u00e0n ph\u00edm c\u01a1",
    },
    {
      path: "quat-tran.htm",
      name: "Qu\u1ea1t tr\u1ea7n",
    },
    {
      path: "loa-bluetooth/",
      name: "Loa bluetooth",
    },
    {
      path: "smartphone-cu/",
      name: "\u0110i\u1ec7n tho\u1ea1i samsung",
    },
    {
      path: "ao-khoac-nam/",
      name: "\u00c1o kho\u00e1c nam",
    },
    {
      path: "ao-so-mi-nam/",
      name: "\u00c1o s\u01a1 mi nam",
    },
    {
      path: "dong-ho-nu/",
      name: "\u0110\u1ed3ng h\u1ed3 n\u1eef",
    },
    {
      path: "dong-ho-nam/",
      name: "\u0110\u1ed3ng h\u1ed3 nam",
    },
    {
      path: "dong-ho-casio.htm",
      name: "\u0110\u1ed3ng h\u1ed3 casio",
    },
    {
      path: "xe-dap-dia-hinh/",
      name: "Xe \u0111\u1ea1p",
    },
    {
      path: "vali-mem/",
      name: "Vali\u00a0k\u00e9o",
    },
    {
      path: "balo/",
      name: "Balo hang hieu",
    },
    {
      path: "xe-tay-ga/",
      name: "Xe tay ga",
    },
    {
      path: "xe-dap-dien/",
      name: "Xe \u0111\u1ea1p \u0111i\u1ec7n",
    },
    {
      path: "ghe-van-phong/",
      name: "Gh\u1ebf v\u0103n ph\u00f2ng",
    },
    {
      path: "noi-com-dien/",
      name: "N\u1ed3i c\u01a1m \u0111i\u1ec7n",
    },
    {
      path: "dep-adidas.htm",
      name: "D\u00e9p adidas",
    },
    {
      path: "giay-nike-chinh-hang.htm",
      name: "Gi\u00e0y nike",
    },
    {
      path: "nguyen-vat-lieu-lam-do-handmade/",
      name: "Handmade",
    },
    {
      path: "ao-dai/",
      name: "\u00c1o d\u00e0i",
    },
    {
      path: "trang-phuc-cuoi/",
      name: "V\u00e1y c\u01b0\u1edbi",
    },
    {
      path: "bikini-quan-vay.htm",
      name: "Bikini",
    },
    {
      path: "may-hut-sua/",
      name: "M\u00e1y h\u00fat s\u1eefa",
    },
    {
      path: "may-khoan/",
      name: "M\u00e1y khoan",
    },
    {
      path: "may-bom-tang-ap/",
      name: "M\u00e1y b\u01a1m n\u01b0\u1edbc",
    },
    {
      path: "bong-den-led/",
      name: "\u0110\u00e8n led",
    },
    {
      path: "sua-ensure-uc-850g.htm",
      name: "S\u1eefa ensure",
    },
    {
      path: "den-pin/",
      name: "\u0110\u00e8n pin",
    },
    {
      path: "may-anh-may-quay-phim/",
      name: "M\u00e1y \u1ea3nh",
    },
    {
      path: "dong-ho-thong-minh/",
      name: "\u0110\u1ed3ng h\u1ed3 th\u00f4ng minh",
    },
    {
      path: "non-son.htm",
      name: "N\u00f3n s\u01a1n",
    },
    {
      path: "camera-wifi.htm",
      name: "Camera wifi",
    },
    {
      path: "may-bay-quay-phim-flycam-drone/",
      name: "Flycam",
    },
    {
      path: "sach-giao-khoa-tham-khao/",
      name: "S\u00e1ch gi\u00e1o khoa",
    },
    {
      path: "may-do-huyet-ap/",
      name: "M\u00e1y \u0111o huy\u1ebft \u00e1p",
    },
    {
      path: "coc-nguyet-san/",
      name: "C\u1ed1c nguy\u1ec7t san",
    },
    {
      path: "thit-bo/",
      name: "Th\u1ecbt b\u00f2",
    },
    {
      path: "mam-ruoc/",
      name: "M\u1eafm ru\u1ed1c",
    },
    {
      path: "tiki.htm",
      name: "Tiki",
    },
    {
      path: "nha-hang/",
      name: "Nh\u00e0 h\u00e0ng",
    },
    {
      path: "lazada.htm",
      name: "Lazada",
    },
    {
      path: "shopee-10k.htm",
      name: "Shopee",
    },
    {
      path: "su-kien/corona/",
      name: "Corona Virus",
    },
    {
      path: "trang.htm",
      name: "trang",
    },
    {
      path: "quan-ao-thoi-trang.htm",
      name: "quan ao thoi trang",
    },
    {
      path: "khau-trang.htm",
      name: "kh\u1ea9u trang",
    },
    {
      path: "giay-trang.htm",
      name: "giay trang",
    },
    {
      path: "khau-trang-kf94.htm",
      name: "kh\u1ea9u trang kf94",
    },
    {
      path: "tu-trang-diem.htm",
      name: "tu trang diem",
    },
    {
      path: "bo-co-trang-diem-nake-5-12-cay.htm",
      name: "b\u1ed9 c\u1ecd trang \u0111i\u1ec3m nake 5 12 c\u00e2y",
    },
    {
      path: "khau-trang-y-te.htm",
      name: "kh\u1ea9u trang y t\u1ebf",
    },
    {
      path: "bo-co-trang-diem.htm",
      name: "bo c\u1ecd trang \u0111i\u1ec3m",
    },
    {
      path: "den-led-trang-tri.htm",
      name: "\u0111\u00e8n led trang tr\u00ed",
    },
    {
      path: "kem-tam-trang.htm",
      name: "kem tam trang",
    },
    {
      path: "trang-tri.htm",
      name: "trang tri",
    },
    {
      path: "bang-chu-dien-tu.htm",
      name: "bang chu dien tu",
    },
    {
      path: "hap-trang-collagen.htm",
      name: "hap trang collagen",
    },
    {
      path: "khau-trang-kf94-thung-300-cai.htm",
      name: "kh\u1ea9u trang kf94 th\u00f9ng 300 c\u00e1i",
    },
    {
      path: "thoi-trang-nu.htm",
      name: "th\u1eddi trang n\u1eef",
    },
    {
      path: "tui-xach-nu-thoi-trang.htm",
      name: "t\u00fai x\u00e1ch n\u1eef th\u1eddi trang",
    },
    {
      path: "mau-ao-co-chu-v.htm",
      name: "mau ao co chu v",
    },
    {
      path: "kem-one-today-trang-da.htm",
      name: "kem one today trang da",
    },
    {
      path: "giay-boot-o-nha-trang.htm",
      name: "giay boot o nha trang",
    },
    {
      path: "serum-ngoc-trai-trang-da.htm",
      name: "serum ngoc trai trang da",
    },
    {
      path: "thoi-trang-huyen-lady.htm",
      name: "thoi trang huyen lady",
    },
    {
      path: "ao-kieu-nu-thoi-trang.htm",
      name: "\u00e1o ki\u1ec3u n\u1eef th\u1eddi trang",
    },
    {
      path: "ban-trang-diem.htm",
      name: "b\u00e0n trang \u0111i\u1ec3m",
    },
    {
      path: "khau-trang-da-nang-di-phuot.htm",
      name: "khau trang da nang di phuot",
    },
    {
      path: "dien-thoai-nokia-8855-man-hinh-trang-den.htm",
      name: "dien thoai nokia 8855 man hinh trang den",
    },
    {
      path: "duong-trang.htm",
      name: "duong trang",
    },
    {
      path: "giay-trang-nu.htm",
      name: "giay trang nu",
    },
    {
      path: "trang-diem.htm",
      name: "trang diem",
    },
    {
      path: "quan-jean-nha-trang.htm",
      name: "quan jean nha trang",
    },
  ];

  const [showMoreTopTimKiem, setShowMoreTopTimKiem] = useState(false);

  return (
    <section className="p-[2.4rem] containerct">
      <div className="flex text-[#0f1e29] flex-col">
        <div
          className="flex cursor-pointer mb-[0.4rem]"
          onClick={() => {
            setShowMoreTopTimKiem(!showMoreTopTimKiem);
          }}
        >
          <span
            className={`mr-[0.4rem] font-[700] text-[12px] leading-[1.6rem]`}
          >
            TOP TÌM KIẾM
          </span>
          <img
            src={downArrow}
            alt=""
            className={`w-[1.2rem] h-[1.2rem] ${
              showMoreTopTimKiem ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`transition-all duration-300 ease-linear ${
            showMoreTopTimKiem
              ? "min-h-[8rem] h-auto overflow-visible"
              : "min-h-[1.8rem] h-[1.8rem] overflow-hidden"
          }`}
        >
          {topTimKiem &&
            topTimKiem.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="mr-[1.6rem] mt-[0.8rem] text-[#0f62fe] font-[400] text-[12px] leading-[1.6rem]"
              >
                {item.name}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FooterSection4;
