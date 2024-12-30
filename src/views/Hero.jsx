import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Row, Col, Typography, Button, Space, Image } from "antd";
import { NavHashLink } from "react-router-hash-link";

import Illustration from "../assets/illustration.svg";
import linkedin from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";
import Hello from "../assets/Hello.gif";
import telegram from "../assets/telegram.svg";

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <div className="py-[15%] w-full flex justify-center items-center">
      <Row
        gutter={32}
        justify="space-between"
        align="middle"
        style={{ width: "80%", color: "var(--text-color)" }}
      >
        <Col span={12} xs={24} md={12}>
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

          <Title
            level={1}
            style={{
              fontSize: "6rem",
              color: "var(--text-color)",
              display: "inline-flex",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "8px",
            }}
          >
            Umar Amjad
          </Title>

          <Title level={3} style={{ color: "#4CAF50" }}>
            Full Stack Web Developer
          </Title>

          <Paragraph
            style={{
              fontSize: "1.8rem",
              letterSpacing: "0.1rem",
              color: "#4CAF50",
            }}
          >
            1+ Years of Experience
          </Paragraph>

          <BrowserRouter>
            <NavHashLink smooth to="#contact">
              <Button
                type="primary"
                size="large"
                style={{ marginTop: "2rem", padding: "1.4rem 6rem" }}
              >
                Contact
              </Button>
            </NavHashLink>
          </BrowserRouter>

          <Space size="large" style={{ marginTop: "3rem" }}>
            <a
              href="https://www.linkedin.com/in/muhammad-umar-amjad/"
              target="_blank"
              rel="noreferrer"
            >
              <Image width={40} src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/umaramjad345"
              target="_blank"
              rel="noreferrer"
            >
              <Image width={40} src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak"
              target="_blank"
              rel="noreferrer"
            >
              <Image width={40} src={whatsapp} alt="Whatsapp" />
            </a>
            {/* <a
                href="https://t.me/CodeVinayak"
                target="_blank"
                rel="noreferrer"
              >
                <Image width={40} src={telegram} alt="Telegram" />
              </a> */}
          </Space>
        </Col>
        <Col xs={24} md={12} style={{ textAlign: "center" }}>
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
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
