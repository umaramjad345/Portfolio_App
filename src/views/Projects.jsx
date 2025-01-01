import React from "react";
import { Row, Col, Card, Button, Typography, Tabs } from "antd";
import {
  GithubOutlined,
  GlobalOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import githubIcon from "../assets/github.svg";
import externalLink from "../assets/external-link.svg";

const { Title, Text, Paragraph } = Typography;

const professionalProjects = (
  <Row gutter={[16, 16]} justify="start" style={{ display: "flex" }}>
    <Col xs={24} sm={12} md={8} lg={6} style={{ display: "flex" }}>
      <Card
        hoverable
        actions={[]}
        style={{
          height: "100%",
          border: "none",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          backgroundColor: "rgba(40, 40, 40, 0.8)",
          color: "var(--text-color)",
          transition:
            "transform 0.3s ease-in-out, box-shadow 0.3s ease, background-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)";
          e.currentTarget.style.backgroundColor = "rgba(40, 40, 40, 0)"; // Fully transparent on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
          e.currentTarget.style.backgroundColor = "rgba(40, 40, 40, 0.8)"; // Reset to dark background with transparency
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col>
                <Title level={4} style={{color: "var(--text-color)",}}>
                  Serverless Voting Application for Programming Languages
                </Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text style={{color: "var(--text-color)",}}>
                  Developed a serverless voting app using React, AWS Lambda, API
                  Gateway, and DynamoDB, enabling users to view programming
                  languages, cast votes, and access details through an
                  interactive UI.
                </Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <ul>
                  <li>AWS Lambda</li>
                  <li>API Gateway</li>
                  <li>DynamoDB</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <a
                  href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "20px",
                    color: "#6f6f6f",
                    border: "none",
                    backgroundColor: "rgba(40, 40, 40, 0.8)",
                  }}
                >
                  <GithubOutlined />
                </a>
                ,
              </Col>
              <Col>
                <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "20px",
                    color: "#6f6f6f",
                    border: "none",
                    backgroundColor: "rgba(40, 40, 40, 0.8)",
                  }}
                >
                  <LinkOutlined />
                </a>
                ,
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8} lg={6} style={{ display: "flex" }}>
    <Card
        hoverable
        actions={[]}
        style={{
          height: "100%",
          border: "none",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          backgroundColor: "rgba(40, 40, 40, 0.8)",
          color: "var(--text-color)",
          transition:
            "transform 0.3s ease-in-out, box-shadow 0.3s ease, background-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)";
          e.currentTarget.style.backgroundColor = "rgba(40, 40, 40, 0)"; // Fully transparent on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
          e.currentTarget.style.backgroundColor = "rgba(40, 40, 40, 0.8)"; // Reset to dark background with transparency
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col>
                <Title level={4}>
                  Serverless Voting Application for Programming Languages
                </Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>
                  Developed a serverless voting app using React, AWS Lambda, API
                  Gateway, and DynamoDB, enabling users to view programming
                  languages, cast votes, and access details through an
                  interactive UI.
                </Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <ul>
                  <li>AWS Lambda</li>
                  <li>API Gateway</li>
                  <li>DynamoDB</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <a
                  href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "20px",
                    color: "#6f6f6f",
                    border: "none",
                    backgroundColor: "rgba(40, 40, 40, 0.8)",
                  }}
                >
                  <GithubOutlined />
                </a>
                ,
              </Col>
              <Col>
                <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "20px",
                    color: "#6f6f6f",
                    border: "none",
                    backgroundColor: "rgba(40, 40, 40, 0.8)",
                  }}
                >
                  <LinkOutlined />
                </a>
                ,
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
);

const practiceProjects = (
  <Row gutter={[16, 16]} justify="start" style={{ display: "flex" }}>
    {/* Project 1 */}
    <Col xs={24} sm={12} md={8} lg={6} style={{ display: "flex" }}>
    <Card
        hoverable
        actions={[]}
        style={{
          height: "100%",
          border: "none",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          backgroundColor: "rgba(40, 40, 40, 0.8)",
          color: "var(--text-color)",
          transition:
            "transform 0.3s ease-in-out, box-shadow 0.3s ease, background-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)";
          e.currentTarget.style.backgroundColor = "rgba(40, 40, 40, 0)"; // Fully transparent on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
          e.currentTarget.style.backgroundColor = "rgba(40, 40, 40, 0.8)"; // Reset to dark background with transparency
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col>
                <Title level={4}>
                  Serverless Voting Application for Programming Languages
                </Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>
                  Developed a serverless voting app using React, AWS Lambda, API
                  Gateway, and DynamoDB, enabling users to view programming
                  languages, cast votes, and access details through an
                  interactive UI.
                </Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <ul>
                  <li>AWS Lambda</li>
                  <li>API Gateway</li>
                  <li>DynamoDB</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <a
                  href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "20px",
                    color: "#6f6f6f",
                    border: "none",
                    backgroundColor: "rgba(40, 40, 40, 0.8)",
                  }}
                >
                  <GithubOutlined />
                </a>
                ,
              </Col>
              <Col>
                <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "20px",
                    color: "#6f6f6f",
                    border: "none",
                    backgroundColor: "rgba(40, 40, 40, 0.8)",
                  }}
                >
                  <LinkOutlined />
                </a>
                ,
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
);

const Projects = () => {
  const items = [
    {
      key: "1",
      label: (
        <Text style={{ fontSize: "1.25rem", color: "var(--text-color)" }}>
          Professional Projects
        </Text>
      ),
      children: professionalProjects,
    },
    {
      key: "2",
      label: (
        <Text style={{ fontSize: "1.25rem", color: "var(--text-color)" }}>
          Practice Projects
        </Text>
      ),
      children: practiceProjects,
    },
  ];

  return (
    <Row
      className="container"
      justify="center"
      align="start"
      style={{
        marginTop: "8rem",
        padding: "0px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Title
        level={2}
        style={{
          color: "var(--text-color)",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        My Projects
      </Title>
      <Tabs
        defaultActiveKey="1"
        items={items}
        style={{
          border: "none",
          borderBottom: "none",
          color: "var(--bg-color)",
        }}
        tabBarStyle={{
          borderBottom: "none",
          boxShadow: "none",
        }}
      />
    </Row>
  );
};

export default Projects;

{
  /* <Col xs={24} sm={12} md={8} lg={6} style={{ display: "flex" }}>
          <Card
            hoverable
            cover={
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 ease-in-out hover:scale-110"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            }
            actions={[
              <a
                href="https://github.com/CodeVinayak/AI-Chatbot-Assistant"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-gray-600 hover:text-green-500"
              >
                <GithubOutlined />
              </a>,
              <a
                href="https://ai-chatbot-t8fn.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-gray-600 hover:text-blue-500"
              >
                <LinkOutlined />
              </a>,
            ]}
            style={{
              height: "100%",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease-in-out",
            }}
            className="hover:transform hover:scale-105"
          >
            <Title level={4}>GeniusBot: AI-Powered Assistance with PDF Insight</Title>
            <Text>
              Developed an interactive chatbot application using Streamlit,
              OpenAI's GPT-3.5-turbo language model, and PyPDF2 for PDF text
              extraction, enabling users to ask context-based questions on
              uploaded PDFs.
            </Text>
            <ul>
              <li>Streamlit</li>
              <li>PyPDF2</li>
              <li>LangChain</li>
            </ul>
          </Card>
        </Col> */
}

{
  /* <Card
        hoverable
        actions={[
          <a
            href="https://github.com/CodeVinayak/Serverless-Voting-Application"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: "20px", color: "#6f6f6f" }}
          >
            <GithubOutlined />
          </a>,
          <a
            href="https://vote.vinayaksingh.com"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: "20px", color: "#6f6f6f" }}
          >
            <LinkOutlined />
          </a>,
        ]}
        style={{
          height: "100%",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
        }}
      >
        <Title level={4}>
          Serverless Voting Application for Programming Languages
        </Title>
        <Text>
          Developed a serverless voting app using React, AWS Lambda, API
          Gateway, and DynamoDB, enabling users to view programming languages,
          cast votes, and access details through an interactive UI.
        </Text>
        <ul>
          <li>AWS Lambda</li>
          <li>API Gateway</li>
          <li>DynamoDB</li>
        </ul>
      </Card> */
}
