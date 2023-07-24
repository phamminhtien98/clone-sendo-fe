import { useRef, useState } from "react";
import { createPortal } from "react-dom";
interface Props {
  text: string | number;
  children: any;
}
const Tooltip = ({ text, children }: Props) => {
  const [isVisible, setIsvisible] = useState(false);
  const div = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={div}
      className="relative"
      onMouseEnter={(e) => {
        setIsvisible(true);
      }}
      onMouseLeave={() => {
        setIsvisible(false);
      }}
    >
      {children}
      {isVisible &&
        createPortal(
          <div
            className={`absolute bg-zinc-900 text-white rounded-[4px] z-50 p-[0.4rem] whitespace-nowrap text-[12px]`}
            style={{
              top: `${
                (div.current?.offsetTop ?? 0) + (div.current?.offsetHeight ?? 0)
              }px`,
              left: `${
                (div.current?.offsetLeft ?? 0) +
                (div.current?.offsetWidth ?? 0) / 2
              }px`,
            }}
          >
            {text}
          </div>,
          document.body
        )}
    </div>
  );
};

export default Tooltip;
