// About.jsx
import React from "react";
import { Row, Col, Typography } from "antd";
import AboutImage from "../components/about/AboutImage";
import AboutBio from "../components/about/AboutBio";
import Skills from "../components/about/Skills";
import aboutData from "../data/aboutData";

const { Title } = Typography;

const About = () => {
  return (
    <div  
      id="about"
      className="container"
      style={{
        marginTop: "8rem",
        padding: "0px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Row
        gutter={32}
        align="top"
        style={{ width: "100%", color: "var(--text-color)" }}
      >
        <Col xs={24} md={12}>
        <AboutBio aboutData={aboutData} />
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
