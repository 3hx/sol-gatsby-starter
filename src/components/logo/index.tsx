import React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <div>
      <StaticImage src="logo.png" alt="logo" />
    </div>
  );
};
