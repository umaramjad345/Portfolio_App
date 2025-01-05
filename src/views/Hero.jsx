import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Row, Col, Typography, Button, Space, Image } from "antd";
import { NavHashLink } from "react-router-hash-link";
import ScrollDownButton from "../components/hero/ScrollDownButton";

import Illustration from "../assets/illustration.svg";
import linkedin from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";
import Hello from "../assets/Hello.gif";
import telegram from "../assets/telegram.svg";
import Resume from "../assets/Resume.pdf";

const { Title, Paragraph, Text } = Typography;

const Hero = () => {
  return (
    <div
      id="home"
      className="container"
      style={{
        marginTop: "12rem",
        padding: "0px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Row
        gutter={[16, 16]}
        justify="center"
        align="center"
        style={{
          width: "100%",
          color: "var(--text-color)",
        }}
      >
        <Col>
          <Row justify="center" align="center" style={{ marginTop: "30px" }}>
            <Col>
              <a
                href="https://www.linkedin.com/in/muhammad-umar-amjad/"
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: "16px" }}
              >
                <Image width={40} src={linkedin} alt="LinkedIn" />
              </a>
            </Col>
          </Row>
          <Row justify="center" align="center" style={{ marginTop: "30px" }}>
            <Col>
              <a
                href="https://github.com/umaramjad345"
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: "16px" }}
              >
                <Image width={40} src={githubIcon} alt="GitHub" />
              </a>
            </Col>
          </Row>
          <Row justify="center" align="center" style={{ marginTop: "30px" }}>
            <Col>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak"
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: "16px" }}
              >
                <Image width={40} src={whatsapp} alt="Whatsapp" />
              </a>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="center" align="center">
            <Col>
              <Paragraph
                style={{
                  fontSize: "1.8rem",
                  color: "var(--text-color)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Hello <img src={Hello} alt="Hello" width="40px" />, I'm
              </Paragraph>
            </Col>
          </Row>
          <Row justify="center" align="center">
            <Col>
              <Title
                level={1}
                style={{
                  fontSize: "4rem",
                  color: "var(--text-color)",
                  fontWeight: "bold",
                  display: "inline-flex",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  gap: "8px",
                }}
              >
                Umar Amjad
              </Title>
            </Col>
          </Row>
          <Row justify="center" align="center" style={{ marginBottom: "16px" }}>
            <Col>
              <Title level={3} style={{ color: "#4CAF50", fontWeight: "500" }}>
                Full Stack Web Developer
              </Title>
            </Col>
          </Row>
          <Row justify="center" align="center" style={{ marginBottom: "32px" }}>
            <Col>
              <Paragraph
                style={{
                  fontSize: "1.8rem",
                  letterSpacing: "0.1rem",
                  color: "#4CAF50",
                }}
              >
                1+ Years of Experience
              </Paragraph>
            </Col>
          </Row>
          <Row justify="center" align="center">
            <Col>
              <NavHashLink smooth to="#contact">
                <Button
                  type="primary"
                  size="large"
                  style={{
                    padding: "1.4rem 6rem",
                    marginTop: "2rem",
                    fontSize: "1.5rem",
                  }}
                >
                  Contact
                </Button>
              </NavHashLink>
            </Col>
            <Col>
              <Button
                type="primary"
                size="large"
                style={{
                  padding: "1.4rem 6rem",
                  marginTop: "2rem",
                  fontSize: "1.5rem",
                }}
              >
                Resume
              </Button>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <ScrollDownButton />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;

{
  /* <Col xs={24} md={12} style={{ textAlign: "center" }}>
          <Image
            width="75%"
            src={Illustration}
            alt="Illustration"
            style={{
              marginTop: "2rem",
              filter: "grayscale(100%)",
              transition: "filter 0.5s",
            }}
            preview={false}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = "grayscale(0)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = "grayscale(100%)")
            }
          />
        </Col> */
}
