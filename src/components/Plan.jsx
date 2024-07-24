function Plan({ plan, price, changes, features, index }) {
  return (
    <div
      className={`${
        index === 1 ? "xl:scale-105" : ""
      } plans px-5 py-20 md:px-10 md:py-20 bg-white font-Saira max-w-[550px] text-black rounded-2xl md:hover:scale-110 transition-all duration-500`}
    >
      <div className="month-to-month flex flex-col gap-10 min-h-[400px] items-center justify-center">
        <h1 className=" font-bold text-5xl md:text-6xl text-center">{plan}</h1>
        <h1 className="text-[#5F7252] font-semibold text-4xl md:text-5xl">
          {price}
        </h1>
        <div className="points flex flex-col  gap-5 text-2xl">
          {features.map((subItem, index) => (
            <div className="flex items-center justify-center gap-3" key={index}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="#8BC34A"
                  points="24,3 28.7,6.6 34.5,5.8 36.7,11.3 42.2,13.5 41.4,19.3 45,24 41.4,28.7 42.2,34.5 36.7,36.7 34.5,42.2 28.7,41.4 24,45 19.3,41.4 13.5,42.2 11.3,36.7 5.8,34.5 6.6,28.7 3,24 6.6,19.3 5.8,13.5 11.3,11.3 13.5,5.8 19.3,6.6"
                ></polygon>
                <polygon
                  fill="#CCFF90"
                  points="34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"
                ></polygon>
              </svg>
              <h1>{subItem}</h1>
            </div>
          ))}
        </div>
        <h2 className="text-gray-500 text-xl md:text-2xl text-center">
          Charges every {changes} unless you cancel
        </h2>
        <button className="border-2 font-bold text-xl md:text-3xl hover:scale-110 transition-all duration-500 bg-black text-white px-3 py-1 rounded-full">
          Start 7 day free trial
        </button>
      </div>
    </div>
  );
}

export default Plan;
