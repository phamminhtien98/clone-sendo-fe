const Chat = () => {
  return (
    <div className="fixed bottom-[2.4rem] right-[2.4rem] z-10">
      <div className=" rounded-[4px] bg-[#3f81fe] h-[40px] w-[94px] flex items-center justify-center cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          color="#fff"
        >
          <path
            d="M20 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7.913L6 21.804V18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16Zm0 2H4v12h4v2.196L11.513 16H20V4Zm-6 7v2H7v-2h7Zm2-4v2H7V7h9Z"
            fill="#fff"
            fill-rule="nonzero"
          ></path>
        </svg>
        <span className="pl-[0.8rem] text-white font-[700] text-[14px]">
          Chat
        </span>
      </div>
    </div>
  );
};

export default Chat;
