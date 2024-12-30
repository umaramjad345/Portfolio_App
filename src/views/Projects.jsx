import React from "react";
import { Row, Col, Card, Button, Typography } from "antd";
import {
  GithubOutlined,
  GlobalOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import githubIcon from "../assets/github.svg";
import externalLink from "../assets/external-link.svg";

const { Title, Text } = Typography;

const Projects = () => {
  return (
    <section className="w-[80%] mx-auto flex flex-col justify-center items-center">
      <Title
        level={2}
        style={{ textAlign: "center", color: "var(--text-color)" }}
      >
        My Projects
      </Title>
      <Row gutter={[16, 16]} justify="center" style={{ display: "flex" }}>
        {/* Project 1 */}
        <Col xs={24} sm={12} md={8} lg={6} style={{ display: "flex" }}>
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
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            }
            actions={[
              <a
                href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                target="_blank"
                rel="noreferrer"
              >
                <GithubOutlined />
              </a>,
              <a
                href="https://vote.vinayaksingh.com"
                target="_blank"
                rel="noreferrer"
              >
                <LinkOutlined />
              </a>,
            ]}
            style={{ height: "100%" }}
          >
            <Title level={4}>
              Serverless Voting Application for Programming Languages
            </Title>
            <Text>
              Developed a serverless voting app using React, AWS Lambda, API
              Gateway, and DynamoDB, enabling users to view programming
              languages, cast votes, and access details through an interactive
              UI.
            </Text>
            <ul>
              <li>AWS Lambda</li>
              <li>API Gateway</li>
              <li>DynamoDB</li>
            </ul>
          </Card>
        </Col>

        {/* Project 2 */}
        <Col xs={24} sm={12} md={8} lg={6} style={{ display: "flex" }}>
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
              >
                <GithubOutlined />
              </a>,
              <a
                href="https://ai-chatbot-t8fn.onrender.com"
                target="_blank"
                rel="noreferrer"
              >
                <LinkOutlined />
              </a>,
            ]}
            style={{ height: "100%" }}
          >
            <Title level={4}>
              GeniusBot: AI-Powered Assistance with PDF Insight
            </Title>
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
        </Col>

        {/* Project 3 */}
        <Col xs={24} sm={12} md={8} lg={6} style={{ display: "flex" }}>
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
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            }
            actions={[
              <a
                href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis"
                target="_blank"
                rel="noreferrer"
              >
                <GithubOutlined />
              </a>,
              <a
                href="https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb"
                target="_blank"
                rel="noreferrer"
              >
                <LinkOutlined />
              </a>,
            ]}
            style={{ height: "100%" }}
          >
            <Title level={4}>Credit Risk Analysis Project</Title>
            <Text>
              Developed a credit risk classification model using XGBoost,
              achieving 100% precision, recall, and F1-scores for predicting
              loan defaults.
            </Text>
            <ul>
              <li>XGBoost</li>
              <li>Pandas</li>
              <li>Matplotlib</li>
            </ul>
          </Card>
        </Col>

        {/* Project 4 */}
        <Col xs={24} sm={12} md={8} lg={6} style={{ display: "flex" }}>
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
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            }
            actions={[
              <a
                href="https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History"
                target="_blank"
                rel="noreferrer"
              >
                <GithubOutlined />
              </a>,
              <a
                href="https://medibook.vinayaksingh.com"
                target="_blank"
                rel="noreferrer"
              >
                <LinkOutlined />
              </a>,
            ]}
            style={{ height: "100%" }}
          >
            <Title level={4}>
              MediBook: Medical Appointment Scheduler with Health History
            </Title>
            <Text>
              Developed a secure medical appointment management platform using
              MySQL database, role-based access control, and encryption
              techniques for scheduling and patient records management.
            </Text>
            <ul>
              <li>PHP</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>MySQL</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Projects;
