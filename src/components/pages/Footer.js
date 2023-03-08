/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext } from "react";

//* import : Context (images)
import { ImageContext } from "../ImageContext";

const Footer = () => {
  const data = useContext(ImageContext);
  const result = data.imageData.map((Element) => {
    return Element.image;
  });

  return (
    <div className="w-full bg-blue-900">
      <div className="flex flex-wrap text-center text-white">
        <div className="w-full p-6 bg-blue-900">
          <div className="w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-white">
            LOCATION US
          </div>
        </div>
        {/* <!-- ABOUT COLUMN --> */}
        <div className="w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left">
          <div className="my-6 ml-3 text-xl font-semibold">GOOGLE MAP</div>
          {/* GOOGLE MAP */}
          <div className="flex items-center justify-center">
            <iframe
              src="https://bit.ly/3L4W7rB"
              className="xl:w-[500px] xl:h-[420px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* <!-- CONTACT COLUMN --> */}
        <div className="w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left">
          <div className="my-6 ml-3 text-xl font-semibold">AROUND US</div>
          <img src={result[17]} alt="" className="xl:w-[500px] xl:h-[420px]" />
        </div>

        {/* <!-- FORM COLUMN --> */}
        <div className="w-full md:w-1/3 p-5">
          <div className="my-6 ml-3 text-xl font-semibold">VARA HOME</div>
          <p className="mt-8 text-gray-400 text-xl">
            Rambuttre Street
            <br />
            Bangkok, BK 5555 <br />
            Thailand
            <br />
            <strong>Phone:</strong> +66 11 111 1111
            <br />
            <strong>Email:</strong> info@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
