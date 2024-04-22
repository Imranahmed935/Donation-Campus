import "./Banner.css";
const Banner = () => {
  return (
    <div
      className="hero "
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-center font-bold text-4xl text-green-500 mb-8">
            I Grow By Helping People In Need
          </h1>
          <div className="flex justify-center items-center">
        <input
          className="w-96 h-12 p-4 text-slate-600 bg-slate-200 shadow outline-none border-none"
          type="text"
          placeholder="Search..."
        />
        <button className="btn btn-success w-32 text-white h-10">Search</button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
