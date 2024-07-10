import React, { useState } from "react";

const Fertilizer = () => {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setShowContent(true);
    }, 1000); // 1 second delay
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      {showContent && <div>Look at me! I'm content!</div>}
    </div>
  );
};

export default Fertilizer;
