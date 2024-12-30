import React from "react";
import { Layout, Typography, Space, Row, Col } from "antd";
import reactIcon from "../assets/react-icon.svg";
import linkedin from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";
import telegram from "../assets/telegram.svg";
import instagramIcon from "../assets/instagram.svg";

const { Text } = Typography;

const Footer = () =>{
  return (
    <Layout.Footer
      style={{
        backgroundColor: "#2b2b2b",
        padding: "3rem 15rem",
        marginTop: "10rem",
      }}
    >
      <Row justify="space-between" align="middle">
        {/* Logo Section */}
        {/* <Col>
          <a
            href="https://vinayaksingh.in"
            style={{ fontSize: "2.8rem", color: "#fff", fontWeight: "bold" }}
          >
            <span>www.vinayak</span>
            <span>singh.in</span>
          </a>
        </Col> */}

        {/* Message Section */}
        <Col>
          <Space align="center">
            <Text
              style={{
                color: "#fff",
                fontSize: "1.5rem",
                letterSpacing: "0.2rem",
              }}
            >
              This Website was made with
            </Text>
            <img
              src={reactIcon}
              alt="React"
              style={{
                width: "2.6rem",
                animation: "spinning 5s infinite linear",
              }}
            />
          </Space>
        </Col>

        {/* Social Media Links */}
        <Col>
          <Space size="large">
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
            {/* <a href="https://t.me/CodeVinayak" target="_blank" rel="noreferrer">
              <img
                src={telegram}
                alt="Telegram"
                style={{ width: "3rem", height: "3rem" }}
              />
            </a> */}
            {/* <a
              href="https://www.instagram.com/vinayaksingh.in"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                style={{ width: "3rem", height: "3rem" }}
              />
            </a> */}
          </Space>
        </Col>
      </Row>
    </Layout.Footer>
  );
}

export default Footer;