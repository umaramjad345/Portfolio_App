// Skills.jsx
import React from "react";
import { Space, Image } from "antd";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";

const skillIcons = [
  htmlIcon,
  cssIcon,
  jsIcon,
  typescriptIcon,
  reactIcon,
  nodeIcon,
  // wordpress,
  // shopify,
  // vueIcon,
  boostrapIcon,
];

const Skills = () => {
  return (
    <Space size={16} wrap>
      {skillIcons.map((icon, index) => (
        <Image
          key={index}
          width={50}
          src={icon}
          alt={icon.split("/").pop()?.split(".")[0]}
        />
      ))}
    </Space>
  );
};

export default Skills;
