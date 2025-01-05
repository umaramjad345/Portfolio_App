import React from "react";
import { Card, Row, Col, Divider, Tag, Typography } from "antd";
import { GithubOutlined, GlobalOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const ProjectCard = ({ project }) => {
  return (
    <Card
      hoverable
      actions={[]}
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        borderRadius: "20px",
        boxShadow: "0 4px 12px rgba(255, 221, 51, 0.7)",
        backgroundColor: "rgba(40, 40, 40, 0.85)",
        color: "var(--text-color)",
        transition:
          "transform 0.3s ease-in-out, box-shadow 0.3s ease, background-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.025)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.border = "1px solid rgba(255, 221, 51, 0.7)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 221, 51, 0.7)";
        e.currentTarget.style.backgroundColor = "rgba(40, 40, 40, 0.8)";
      }}
    >
      <Row gutter={[16, 16]} justify="start">
        <Col>
          <Row>
            <Col>
              <Title level={4} style={{ color: "var(--text-color)" }}>
                {project.title}
              </Title>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col>
              <Text style={{ color: "var(--text-color)" }}>
                {project.description}
              </Text>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[8, 8]} justify="start" align="start">
            {project.tags.map((tag, index) => (
              <Col key={index}>
                <Tag
                  color="magenta"
                  style={{
                    border: "none",
                    borderRadius: "16px",
                    padding: "5px 10px",
                    fontSize: "12px",
                    backgroundColor: "rgba(110, 61, 61, 0.8)",
                    color: "var(--text-color)",
                  }}
                >
                  {tag}
                </Tag>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ProjectCard;

{
  /* <Card
  hoverable
  actions={[]}
  style={{
    height: "100%",
    border: "none",
    borderRadius: "20px",
    boxShadow: "0 4px 12px rgba(255, 221, 51, 0.7)",
    backgroundColor: "rgba(40, 40, 40, 0.85)",
    color: "var(--text-color)",
    transition:
      "transform 0.3s ease-in-out, box-shadow 0.3s ease, background-color 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.025)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.border = "1px solid rgba(255, 221, 51, 0.7)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 221, 51, 0.7)";
    e.currentTarget.style.backgroundColor = "rgba(40, 40, 40, 0.8)";
  }}
>
  <Row gutter={[16, 16]} justify="start">
    <Col>
      <Row>
        <Col>
          <Title level={4} style={{ color: "var(--text-color)" }}>
            Ecommerce Management System
          </Title>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text style={{ color: "var(--text-color)" }}>
            Developed a serverless voting app using React, AWS Lambda, API
            Gateway, and DynamoDB, enabling users to view programming languages,
            cast votes, and access details through an interactive UI.
          </Text>
        </Col>
      </Row>
      <Divider />
      <Row gutter={[8, 8]} justify="start" align="start">
        <Col>
          <Tag
            color="magenta"
            style={{
              border: "none",
              borderRadius: "16px",
              padding: "5px 10px",
              fontSize: "12px",
              backgroundColor: "rgba(110, 61, 61, 0.8)",
              color: "var(--text-color)",
            }}
          >
            AWS Lambda
          </Tag>
        </Col>
        <Col>
          <Tag
            color="magenta"
            style={{
              border: "none",
              borderRadius: "16px",
              padding: "5px 10px",
              fontSize: "12px",
              backgroundColor: "rgba(110, 61, 61, 0.8)",
              color: "var(--text-color)",
            }}
          >
            API Gateway
          </Tag>
        </Col>
        <Col>
          <Tag
            color="magenta"
            style={{
              border: "none",
              borderRadius: "16px",
              padding: "5px 10px",
              fontSize: "12px",
              backgroundColor: "rgba(110, 61, 61, 0.8)",
              color: "var(--text-color)",
            }}
          >
            DynamoDB
          </Tag>
        </Col>
      </Row>
    </Col>
  </Row>
</Card>; */
}
