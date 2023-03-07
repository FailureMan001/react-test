import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

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
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  return (
    <div>Contact</div>
  )
}

export default Contact