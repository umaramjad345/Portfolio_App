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

// const skillIcons = [
//   { icon: <FaHtml5 />, style: "shadow-orange-500" },
//   { icon: <FaCss3Alt />, style: "shadow-blue-500" },
//   { icon: <DiJavascript1 />, style: "shadow-yellow-500" },
//   { icon: <DiReact />, style: "shadow-blue-600" },
//   { icon: <SiNextdotjs />, style: "shadow-white" },
//   { icon: <DiNodejs />, style: "shadow-green-400" },
//   { icon: <DiMongodb />, style: "shadow-green-500" },
//   { icon: <DiPython />, style: "shadow-orange-500" },
//   { icon: <DiGit />, style: "shadow-gray-400" },
//   { icon: <SiFirebase />, style: "shadow-yellow-500" },
// {
//   src: graphql,
//   style: "shadow-pink-400",
// },
// ];

const skillIcons = [
  {
    icon: <FaHtml5 />,
    style: { boxShadow: "0 4px 12px rgba(255, 165, 0, 0.7)" },
  },
  {
    icon: <FaCss3Alt />,
    style: { boxShadow: "0 4px 12px rgba(59, 130, 246, 0.7)" },
  },
  {
    icon: <DiJavascript1 />,
    style: { boxShadow: "0 4px 12px rgba(255, 221, 51, 0.7)" },
  },
  {
    icon: <DiReact />,
    style: { boxShadow: "0 4px 12px rgba(59, 130, 246, 0.7)" },
  },
  {
    icon: <SiNextdotjs />,
    style: { boxShadow: "0 4px 12px rgba(255, 255, 255, 0.7)" },
  },
  {
    icon: <DiNodejs />,
    style: { boxShadow: "0 4px 12px rgba(72, 186, 44, 0.7)" },
  },
  {
    icon: <DiMongodb />,
    style: { boxShadow: "0 4px 12px rgba(35, 111, 71, 0.7)" },
  },
  {
    icon: <DiPython />,
    style: { boxShadow: "0 4px 12px rgba(255, 165, 0, 0.7)" },
  },
  {
    icon: <DiGit />,
    style: { boxShadow: "0 4px 12px rgba(128, 128, 128, 0.7)" },
  },
  {
    icon: <SiFirebase />,
    style: { boxShadow: "0 4px 12px rgba(254, 202, 87, 0.7)" },
  },
];

const Skills = () => {
  return (
    <Row
      id="skills"
      className="container"
      style={{
        marginTop: "8rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col>
        <Row>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Title level={2} style={{ color: "var(--text-color)" }}>
              Skills
            </Title>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="center" align="center">
          {skillIcons.map((skill, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <div
                style={{
                  width: "256px",
                  height: "160px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "4rem",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  padding: "10px",
                  ...skill.style,
                  color: "var(--text-color)",
                  backgroundColor: "var(--bg-color)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  // e.currentTarget.style.boxShadow =
                  //   "0 8px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  // e.currentTarget.style.boxShadow =
                  //   "0 4px 12px rgba(0, 0, 0, 0.2)";
                }}
              >
                {skill.icon}
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Skills;

// slick-slider slick-initialized
