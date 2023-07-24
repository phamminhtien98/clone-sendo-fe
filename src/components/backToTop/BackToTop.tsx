import { useState, useEffect } from "react";
const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {showButton && (
        <button
          className="fixed flex justify-center items-center bottom-[8.8rem] right-[52px] cursor-pointer bg-white rounded-[0.4rem] h-[4rem] w-[4rem] z-10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
          onClick={handleClick}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={{ color: "rgb(136, 138, 142)" }}
          >
            <path
              fill="#6F787E"
              fill-rule="nonzero"
              d="M13 5.414V22h-2V5.414l-6.293 6.293-1.414-1.414L12 1.586l8.707 8.707-1.414 1.414z"
            ></path>
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTop;
