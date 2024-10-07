import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-gradient-to-b from-black to-white text-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-40 lg:flex lg:h-auto lg:items-center">
        {" "}
        {/* Reduced padding and height */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Learn new skill with
            <span className="sm:block"> Skillup </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 sm:text-xl">
            Elevate your skills with our comprehensive online courses, designed
            to enhance your learning experience.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <Button
                variant="default"
                className="px-12 py-3 text-sm font-medium"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
