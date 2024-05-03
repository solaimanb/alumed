import React from "react";

const sizes = {
  "5xl": "text-[73px] font-normal md:text-5xl",
  "6xl": "text-[76px] font-normal md:text-5xl",
  "7xl": "text-[88px] font-normal md:text-5xl",
  "8xl": "text-[91px] font-normal md:text-5xl",
  "2xl": "text-[41px] font-normal md:text-[37px] sm:text-[31px]",
  "3xl": "text-[64px] font-normal md:text-5xl",
  "4xl": "text-7xl font-normal md:text-5xl",
  xs: "text-[11px] font-normal",
  lg: "text-[17px] font-medium",
  s: "text-[13px] font-medium",
  xl: "text-[39px] font-medium md:text-[37px] sm:text-[35px]",
  "9xl": "text-[159px] font-normal md:text-8xl",
  "10xl": "text-[161px] font-normal md:text-5xl",
  md: "text-base font-medium",
  "11xl": "text-[165px] font-normal md:text-5xl",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-blue_gray-900 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
