import bannerImage from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="w-10/12 mx-auto mb-0 mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 justify-between items-center">
        <div>
          <h2 className="text-3xl lg:text-6xl font-extrabold text-center">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-[#FF5722] to-[#7C3AED] bg-clip-text text-transparent">
              {" "}
              Development Stack
            </span>
          </h2>
          <p className="pt-10 text-lg text-gray-500 text-justify">
            Explore frontend, backend, database, and tooling options,
            <br />
            compare them side by side, and put together the stack that fits your
            next project.
          </p>
          <div className="flex gap-3 pt-8">
            <button className="py-1 px-3 text-white rounded-lg border bg-linear-to-r from-[#F97316] to-[#EC4899]">
              Explore Technologies
            </button>
            <button className="border py-1 px-8 rounded-lg">Learn More</button>
          </div>
        </div>
        <div>
          <img src={bannerImage}></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
