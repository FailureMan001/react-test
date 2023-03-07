import React, { useContext } from "react";
import { Link } from "react-router-dom";

// * import : context
import { ImageContext } from "../ImageContext";

//* import : image zoom CSS
import "../layout/blog.css";

const Blog = () => {
  const data = useContext(ImageContext);
  const result = data.imageData.map((Element) => {
    return Element.image;
  });

  return (
    <div className="container mx-auto -mt-3">
      <div className="section bg-blue-100">
        <div className="section-title">BLOG</div>
        <div className="section-subtitle">
          Exlore our rich and diverse portfolio
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-blue-200">
        <div className="flex flex-wrap text-center text-white">
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="rounded overflow-hidden shadow-lg">
              <Link
                to="/blog-01"
                
                className="card-zoom"
              >
                <img
                  src={result[18]}
                  alt="Home"
                  className="card-zoom-image bg-beetle"
                />
              </Link>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 hover:text-orange-400 cursor-pointer">
                  <Link to="/blog-01" >
                    Luxury Room
                  </Link>
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block hover:-mt-1 bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  <Link to="/blog-02" >
                    READ MORE
                  </Link>
                </span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded overflow-hidden shadow-lg">
              <Link
                to="/blog-02"
                
                className="card-zoom"
              >
                <img
                  src={result[19]}
                  alt="Home"
                  className="card-zoom-image bg-beetle"
                />
              </Link>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 hover:text-orange-400 cursor-pointer">
                  <Link to="/blog-02" >
                    Kitchen Room
                  </Link>
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block hover:-mt-1 bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  <Link to="/blog-02" >
                    READ MORE
                  </Link>
                </span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="rounded overflow-hidden shadow-lg">
              <Link
                to="/blog-03"
                
                className="card-zoom"
              >
                <img
                  src={result[20]}
                  alt="Home"
                  className="card-zoom-image bg-beetle"
                />
              </Link>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 hover:text-orange-400 cursor-pointer">
                  <Link to="/blog-03" >
                    Minimal room
                  </Link>
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block hover:-mt-1 bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  <Link to="/blog-03" >
                    READ MORE
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
