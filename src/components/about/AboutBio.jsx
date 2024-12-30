// AboutBio.jsx
import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const AboutBio = () => {
  return (
    <div>
      <Title
        level={2}
        // style={{ color: "#4CAF50" }}
        style={{ color: "var(--text-color)" }}
      >
        About me
      </Title>

      <Paragraph
        style={{
          fontSize: "1rem",
          letterSpacing: "0.1rem",
          color: "var(--text-color)",
        }}
      >
        I am a Self-Taught Full Stack Web Developer with hands-on experience in
        both frontend and backend technologies. I am passionate about creating
        innovative, scalable web solutions that solve real-world problems and
        provide seamless user experiences.
      </Paragraph>

      <Paragraph
        style={{
          fontSize: "1rem",
          letterSpacing: "0.1rem",
          color: "var(--text-color)",
        }}
      >
        I specialize in React.js, Next.js, Node.js, and ASP.NET Core for
        building modern web applications. My skill set includes crafting
        intuitive user interfaces and architecting efficient backend systems
        using MongoDB, SQL Server, and Express.js.
      </Paragraph>

      <Paragraph
        style={{
          fontSize: "1rem",
          letterSpacing: "0.1rem",
          color: "var(--text-color)",
        }}
      >
        I thrive in agile environments where I collaborate with cross-functional
        teams to deliver high-quality solutions. My focus is always on
        problem-solving, ensuring the solutions I create are both functional and
        visually appealing.
      </Paragraph>

      <Paragraph
        style={{
          fontSize: "1rem",
          letterSpacing: "0.1rem",
          color: "var(--text-color)",
        }}
      >
        I am committed to staying ahead of industry trends by continuously
        learning new tools, frameworks, and best practices. Currently, I’m
        deepening my expertise in Next.js, focusing on creating faster,
        SEO-friendly, and highly scalable applications.
      </Paragraph>

      <Paragraph
        style={{
          fontSize: "1rem",
          letterSpacing: "0.1rem",
          color: "var(--text-color)",
        }}
      >
        Beyond development, I’m passionate about exploring mobile app
        development, artificial intelligence (AI), and cloud computing. These
        areas fuel my curiosity for new technologies and my drive to create
        cutting-edge solutions.
      </Paragraph>

      <Paragraph
        style={{
          fontSize: "1rem",
          letterSpacing: "0.1rem",
          color: "var(--text-color)",
        }}
      >
        I’m excited to take on projects that challenge the status quo and create
        meaningful impact. Let’s work together to build something exceptional.
      </Paragraph>
    </div>
  );
};

export default AboutBio;
