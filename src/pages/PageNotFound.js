import guy from "../images/guy.png";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-grey-700 font-bold my-10 dark:text-white">
            Page Not Found
          </p>
          <div className="max-w-lg">
            <img src={guy} alt="" />
          </div>
        </div>
        <div className="flex  justify-center">
          <Link to="/">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
