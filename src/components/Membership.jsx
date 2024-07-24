import Plan from "./Plan";
const plansData = [
  {
    plan: "Month to Month",
    price: "₹899/Month",
    changes: "month",
    features: ["All classes", "All member events", "Full gym access"],
  },
  {
    plan: "6 Month Membership",
    price: "₹4599/Month",
    changes: "6 month",
    features: ["All classes", "All member events", "Full gym access"],
  },
  {
    plan: "1 Year Membership",
    price: "₹7599/Month",
    changes: "Year",
    features: ["All classes", "All member events", "Full gym access"],
  },
];
//#5F7252
function Membership() {
  return (
    <div className="bg-[#5F7252] w-full font-Saira text-white py-10 md:py-20">
      <div className=" flex flex-col gap-6 items-center justify-center px-5">
        <h1 className=" border-white border-4 rounded-xl font-semibold w-fit px-3 py-2 text-4xl">
          Membership
        </h1>
        <h1 className=" text-5xl font-bold md:text-8xl text-center">
          Crushing your health and fitness goals starts here...
        </h1>
      </div>
      <div className="plans py-18 md:py-24 px-3 flex md:gap-16 gap-5 flex-wrap items-center justify-center">
        {plansData.map((item, index) => (
          <div key={index}>
            <Plan
              plan={item.plan}
              price={item.price}
              changes={item.changes}
              features={item.features}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Membership;