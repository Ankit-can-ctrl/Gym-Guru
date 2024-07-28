function ProgramCard({ id, tag, heading, points, img, index }) {
  return (
    <div
      id={id}
      className={`${
        (index + 1) % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      } card flex flex-col gap-10 items-center`}
    >
      <div className="Program-details flex flex-col items-start px-5 lg:px-10 gap-8">
        <div className="tag border-2 w-fit font-semibold text-xl md:text-4xl rounded-full px-4 py-2">
          {tag}
        </div>
        <h1 className=" text-4xl md:text-6xl font-semibold lg:w-[40%]">
          {heading}
        </h1>
        {points.map((item, index) => (
          <div
            key={index}
            className="point flex items-center justify-start gap-4 text-2xl md:text-4xl"
          >
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
            <h1>{item}</h1>
          </div>
        ))}
      </div>
      <div className="program-image md:p-5">
        <img
          className="rounded-xl object-cover object-center min-h-[800px] md:max-w-[900px]"
          src={img}
          alt="programs"
        />
      </div>
    </div>
  );
}

export default ProgramCard;
