/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useContext } from "react";

// * import : context
import { ImageContext } from "../ImageContext";

//* import : image zoom CSS
import "../layout/blog.css";

const Contact = () => {
  const data = useContext(ImageContext);
  const result = data.imageData.map((Element) => {
    return Element.image;
  });

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // TODO: ส่งเมล
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "01356352-1e4d-4e54-a13a-080996cb4fc7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Success", res);
    }
  }; // TODO: END of MAIL

  return (
    <div className="container mx-auto -mt-3">
      {/* CONTACT US */}
      <div className="section bg-blue-100">
        <div className="section-title">ติดต่อเรา</div>
        <div className="section-subtitle text-xl">
          <span>สิ้นสุดการเดินทางมาถึงขั้นตอนสุดท้าย สำหรับลูกค้าที่ต้องการซื้อบ้าน</span>
          <span> โครงการวราพร็อพเพ้อตี้ บ้านที่เหมาะสมกับราคาที่ต้องจ่าย</span>
          <span>ติดต่อผู้จัดการฝ่ายขายได้ที่นี้</span>
        </div>
      </div>

      {/* BOX*/}
      <div className="w-full bg-blue-200">
        <div className="flex flex-wrap text-center text-white">
          {/* LOCATION IAMGE */}
          <div className="flex justify-center w-full md:w-1/2 p-5 border-r border-orange-500">
          <img src={result[9]} alt="" />
          </div>

          {/*  MAIL FORM */}
          <div className="w-full md:w-1/2 p-5 border-r border-blue-800 md:text-left">
            <form
              onSubmit={onSubmit}
              className="text-gray-700 body-font relative"
            >
              <div className="container px-5 py-1 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    EMAIL US
                  </h1>
                  <div className="lg:w-2/3 mx-auto leading-relaxed text-base">
                   <span>หรือต้องการติดต่อผ่านทาง EMAIL</span> 
                  </div>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                  <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="email"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label
                          htmlFor="message"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <button
                        type="submit"
                        className="flex mx-auto text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500 rounded text-lg"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
