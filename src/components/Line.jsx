import React from "react";

const Line = ({ color = "white", hoverColor = "black", margin = "2" }) => {
  return (
    <div
      className={`group w-[80%] h-[1px] rounded-full transition-all duration-300`}
      style={{
        marginTop: `${margin}rem`,
        marginBottom: `${margin}rem`,
        backgroundColor: color,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = color)}
    ></div>
  );
};

export default Line;
