import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const AboutBio = ({ aboutData }) => {
  return (
    <div>
      <Title
        level={2}
        // style={{ color: "#4CAF50" }}
        style={{ color: "var(--text-color)" }}
      >
        About me
      </Title>

      {aboutData.map((item) => (
        <Paragraph
          key={item.id}
          style={{
            fontSize: "1rem",
            letterSpacing: "0.1rem",
            color: "var(--text-color)",
          }}
        >
          {item.content}
        </Paragraph>
      ))}
    </div>
  );
};

export default AboutBio;
