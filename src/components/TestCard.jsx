function TestCard({ message, image }) {
  return (
    <div className="bg-[#77896b] border-white border-4 rounded-lg p-10 md:min-w-[400px] md:max-w-[400px] md:min-h-[400px] font-Saira text-white flex flex-col items-center justify-center gap-5">
      <div className="Stars text-4xl ">⭐⭐⭐⭐⭐</div>
      <h1 className="Review text-2xl text-center font-semibold">{message}</h1>
      <img className=" h-[70px]" src={image} alt="Customer" />
    </div>
  );
}

export default TestCard;
