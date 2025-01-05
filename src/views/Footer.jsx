import React from "react";
import { Layout, Typography, Space, Row, Col } from "antd";
import reactIcon from "../assets/react-icon.svg";
import linkedin from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";
import telegram from "../assets/telegram.svg";
import instagramIcon from "../assets/instagram.svg";

const { Text } = Typography;

const Footer = () => {
  return (
    <div
      style={{
        width: "100vw",
        marginTop: "6rem",
        padding: "2rem 0rem",
        backgroundColor: "#2b2b2b",
      }}
    >
      <Row justify="space-between" align="middle" className="container">
        <Col xs={24} sm={12} md={8}>
          <Row justify="start" align="middle">
            <Col
              style={{
                color: "var(--text-color)",
                fontWeight: "500",
              }}
            >
              &copy; {new Date().getFullYear()}
            </Col>
            <Col>
              <a
                href="https://www.linkedin.com/in/muhammad-umar-amjad/"
                target="__blank"
                style={{
                  color: "var(--text-color)",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  marginLeft: "0.25rem",
                  transition: "color 0.5s, text-decoration 0.5s",
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#4CAF50";
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "var(--text-color)";
                  e.target.style.textDecoration = "none";
                }}
              >
                UMAR AMJAD
              </a>
            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Row justify="start" align="middle">
            <Col>
              <Text
                style={{
                  color: "#fff",
                  fontSize: "1.125rem",
                  letterSpacing: "0.2rem",
                }}
              >
                This Website was made with
              </Text>
            </Col>
            <Col>
              <img
                src={reactIcon}
                alt="React"
                style={{
                  width: "2.6rem",
                  animation: "spinning 5s infinite linear",
                }}
              />
            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Row justify="end" align="middle">
            <Col>
              <a
                href="www.linkedin.com/in/muhammad-umar-amjad"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedin}
                  alt="Linkedin"
                  style={{ width: "3rem", height: "3rem" }}
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://github.com/umaramjad345"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  style={{ width: "3rem", height: "3rem" }}
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={whatsapp}
                  alt="Whatsapp"
                  style={{ width: "3rem", height: "3rem" }}
                />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
