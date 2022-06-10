import React from "react";
import { FaComment } from "react-icons/fa";
const CTA = () => {
  return (
    <>
      <a
        href="/"
        className="btn btn-light rounded-0 border-0 shadow-none cta d-block mx-lg-0 mx-auto"
      >
        <span className="cta_icon">
          <FaComment />
        </span>
        <span className="cta_text">Let's talk about your app</span>
      </a>
    </>
  );
};

export default CTA;
