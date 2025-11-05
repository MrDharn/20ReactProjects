import React, { useState ,useRef } from "react";
import useOutsideClick from "./Render";
import './outside.css'

const OnclickOutside = () => {
  const [showContent, setShowContent] = useState(false);

  const ref = useRef();

  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div className="outside-click-wrapper">
      {showContent ? (
        <div ref={ref} className="content-box">
          <h1>This is a random content</h1>
          <p>Please click outside of this content to close</p>
        </div>
      ) : (
        <button className="show-btn" onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default OnclickOutside;
