import { Link } from "react-router-dom";

const ErrorPage = ({ error }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="p-5 pt-10">
        {error ? error : "Oops, it looks like you're lost."}{" "}
      </h2>
      <h3 className="pb-20">Head back Home and try finding your way. :)</h3>
      <Link to="/" className="text-blue-400 animate-bounce">
        Home
      </Link>
    </div>
  );
};
export default ErrorPage;
