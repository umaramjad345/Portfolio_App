import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Row, Col, Typography, Button, Space, Image, Tooltip } from "antd";
import { NavHashLink } from "react-router-hash-link";
import ScrollDownButton from "../components/hero/ScrollDownButton";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import Illustration from "../assets/illustration.svg";
import linkedin from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";
import Hello from "../assets/Hello.gif";
import telegram from "../assets/telegram.svg";
import Resume from "../assets/Resume.pdf";

const phoneNumber = "+923037515829";
// const phoneNumber = "+923467651015";
const defaultMessage = "Hello Umar";
const whatsappUrl = `https://api.whatsapp.com/send/?phone=${encodeURIComponent(
  phoneNumber
)}&text=${encodeURIComponent(defaultMessage)}`;

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
        <Col span={24}>
          <Row justify="center" align="center" gutter={[8, 8]}>
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
              <Row
                justify="center"
                align="center"
                style={{ marginBottom: "16px" }}
              >
                <Col>
                  <Title
                    level={3}
                    style={{ color: "#4CAF50", fontWeight: "500" }}
                  >
                    Full Stack Web Developer
                  </Title>
                </Col>
              </Row>
              <Row
                justify="center"
                align="center"
                style={{ marginBottom: "32px" }}
              >
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
            </Col>
          </Row>
          <Row
            justify="space-between"
            align="end"
            style={{
              width: "100%",
              color: "var(--text-color)",
            }}
          >
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Row
                justify="start"
                align="center"
                style={{ marginBottom: "16px" }}
              >
                <Col>
                  <Link
                    to="https://www.linkedin.com/in/muhammad-umar-amjad/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin size={40} color="#0077b5" />
                  </Link>
                </Col>
              </Row>
              <Row
                justify="center"
                align="center"
                style={{ marginBottom: "16px" }}
              >
                <Col>
                  <Link
                    to="https://github.com/umaramjad345"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size={40} color="#333" />
                  </Link>
                </Col>
              </Row>
              <Row justify="center" align="center">
                <Col>
                  <Link to={whatsappUrl} target="_blank" rel="noreferrer">
                    <FaWhatsapp size={40} color="#25D366" />
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Row justify="center" align="bottom" gutter={[8, 8]}>
                <Col>
                  <NavHashLink smooth to="#contact">
                    <Button
                      type="primary"
                      size="large"
                      style={{
                        padding: "1.5rem 3rem",
                        fontSize: "1.5rem",
                        borderRadius: "30px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#4CAF50",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = "#388E3C")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = "#4CAF50")
                      }
                    >
                      Contact
                    </Button>
                  </NavHashLink>
                </Col>
                <Col>
                  <a href={Resume} download>
                    <Button
                      type="primary"
                      size="large"
                      style={{
                        padding: "1.5rem 3rem",
                        // marginTop: "2rem",
                        fontSize: "1.5rem",
                        borderRadius: "30px",
                        borderColor: "#4CAF50",
                        color: "#4CAF50",
                        backgroundColor: "transparent",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#4CAF50";
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#4CAF50";
                      }}
                    >
                      Resume
                    </Button>
                  </a>
                </Col>
              </Row>
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Row justify="end" align="bottom">
                <Col>
                  <ScrollDownButton />
                </Col>
              </Row>
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
