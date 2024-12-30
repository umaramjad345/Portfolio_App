// About.jsx
import React from "react";
import { Row, Col, Typography } from "antd";
import AboutImage from "../components/about/AboutImage";
import AboutBio from "../components/about/AboutBio";
import Skills from "../components/about/Skills";

const { Title } = Typography;

const About = () => {
  return (
    <div className="mt-12 w-full flex justify-center items-center">
      <Row
        gutter={32}
        align="top"
        style={{ width: "80%", color: "var(--text-color)" }}
      >
        <Col xs={24} md={12}>
          <AboutBio />
          <Title
            level={3}
            // style={{ color: "#4CAF50" }}
            style={{ color: "var(--text-color)" }}
          >
            Here are my main skills:
          </Title>
          <Skills />
        </Col>

        <Col xs={24} md={12} style={{ textAlign: "center" }}>
          <AboutImage />
        </Col>
      </Row>
    </div>
  );
};

export default About;
