const Loading = () => {
  return (
    <div className="fixed bg-[#0008] w-full h-full  top-0 left-0 z-50 text-white flex items-center justify-center loading">
      <svg width="205" height="250" viewBox="0 0 40 50">
        <polygon
          className="polygon"
          strokeWidth="1"
          stroke="#fff"
          fill="none"
          points="20,1 40,40 1,40"
        ></polygon>
        <text
          className="font-loading text-[5px] font-black tracking-[1px] loading"
          fill="#fff"
          x="5"
          y="47"
        >
          LOADING
        </text>
      </svg>
    </div>
  );
};

export default Loading;
