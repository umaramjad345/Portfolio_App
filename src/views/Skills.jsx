import React from "react";

import { Row, Col, Space, Typography, Button, Card, Carousel } from "antd";
const { Title, Paragraph } = Typography;

import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs } from "react-icons/si";

const skillIcons = [
  { icon: <FaHtml5 />, style: "shadow-orange-500" },
  { icon: <FaCss3Alt />, style: "shadow-blue-500" },
  { icon: <DiJavascript1 />, style: "shadow-yellow-500" },
  { icon: <DiReact />, style: "shadow-blue-600" },
  { icon: <SiNextdotjs />, style: "shadow-white" },
  { icon: <DiNodejs />, style: "shadow-green-400" },
  { icon: <DiMongodb />, style: "shadow-green-500" },
  { icon: <DiPython />, style: "shadow-orange-500" },
  { icon: <DiGit />, style: "shadow-gray-400" },
  { icon: <SiFirebase />, style: "shadow-yellow-500" },
  // {
  //   src: graphql,
  //   style: "shadow-pink-400",
  // },
];

const Skills = () => {
  return (
    <div className="mt-10 w-[80%] flex flex-col justify-center items-center mx-auto">
      <Title level={2} style={{ color: "var(--text-color)" }}>
        Skills
      </Title>
      <Row gutter={[16, 16]} justify="center" align="center">
        {skillIcons.map((skill, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <div
              className={`w-64 h-40 flex items-center justify-center text-6xl rounded-xl transition-all duration-300 hover:scale-105 shadow-md py-2 ${skill.style}`}
              style={{
                color: "var(--text-color)",
                backgroundColor: "var(--bg-color)",
                // borderWidth: "2px",
                // borderStyle: "solid",
                // borderColor: "var(--text-color)",
              }}
            >
              {skill.icon}
            </div>
          </Col>
        ))}
      </Row>
      
    </div>
  );
};

export default Skills;

// slick-slider slick-initialized
