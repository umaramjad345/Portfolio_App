import React from "react";
import { Row, Col, Space, Typography, Button, Card } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import emailIcon from "../assets/email-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";
import ContactForm from "../components/contact/ContactForm";

const { Title, Paragraph } = Typography;

const Contact = () => {
  return (
    <Row
      id="contact"
      justify="center"
      align="center"
      gutter={[16, 16]}
      style={{ marginTop: "8rem" }}
    >
      <Col>
        <Space
          direction="vertical"
          justify="center"
          align="center"
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Title level={2} style={{ color: "var(--text-color)" }}>
            Contact
          </Title>
          <Paragraph style={{ color: "var(--text-color)" }}>
            Contact me now for a Free consultation.
          </Paragraph>
        </Space>

        <Row justify="center" align="center" gutter={[16, 16]}>
          <Col span={24} sm={24} md={12}>
            <Card
              style={{
                padding: "1.6rem 2.8rem",
                borderRadius: "1.4rem",
                border: "none",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              hoverable
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f759ab")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#52c41a")
              }
            >
              <Row
                justify="center"
                align="center"
                style={{ width: "100%", gap: "10px" }}
              >
                <Col>
                  <img src={emailIcon} alt="Email" style={{ width: "30px" }} />
                </Col>
                <Col>
                  <a
                    href="mailto:umarziaii345@gmail.com"
                    style={{ fontWeight: "500", color: "#000" }}
                  >
                    umarziaii345@gmail.com
                  </a>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={24} sm={24} md={12}>
            <Card
              style={{
                padding: "1.6rem 2.8rem",
                border: "none",
                borderRadius: "1.4rem",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              hoverable
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f759ab")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#52c41a")
              }
            >
              <Row
                justify="center"
                align="center"
                style={{ width: "100%", gap: "10px" }}
              >
                <Col>
                  <img src={phoneIcon} alt="Phone" style={{ width: "30px" }} />
                </Col>
                <Col>
                  <a
                    href="tel:+923037515829"
                    style={{ fontWeight: "500", color: "#000" }}
                  >
                    (+92) 3037515829
                  </a>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row justify="center" align="center" gutter={[16, 16]}>
          <ContactForm />
        </Row>
      </Col>
    </Row>
  );
};

export default Contact;
