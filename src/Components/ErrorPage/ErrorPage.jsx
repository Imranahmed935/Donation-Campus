import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-52">
      <h1 className=" text-6xl text-red-600 mb-10">Ops! 404 Error!!</h1>
      <Link to={"/"}>
        <button className=" btn btn-secondary">back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
