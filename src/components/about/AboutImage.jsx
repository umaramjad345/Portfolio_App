// AboutImage.jsx
import React from "react";
import { Image } from "antd";
import ProfilePicture from "../../assets/ProfilePicture.png";

const AboutImage = () => {
  return (
    <div>
      <Image
        width="75%"
        src={ProfilePicture}
        alt="Vinayak Singh"
        style={{
          borderRadius: "50%",
          marginTop: "2rem",
          filter: "grayscale(100%)",
          transition: "filter 0.5s",
        }}
        preview={false}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0)")}
        onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
      />
    </div>
  );
};

export default AboutImage;
