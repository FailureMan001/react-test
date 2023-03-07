import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-blue-900">
      <div className="flex flex-wrap text-center text-white">
        <div className="w-full  p-5 border-r border-blue-800 md:text-center">
          <div className="my-6 ml-3 text-xl font-semibold">CONTACT US</div>
          <p className="mt-8 text-gray-400">
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
