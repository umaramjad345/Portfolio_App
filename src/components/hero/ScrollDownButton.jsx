import { useState, useEffect, useCallback } from "react";
import { Button } from "antd";

const ScrollDownButton = () => {
  const backToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Button
        onClick={backToBottom}
        style={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          background: "rgba(240, 248, 255, 0.3)",
          color: "rgb(2, 2, 54)",
          borderRadius: "10px",
          cursor: "pointer",
          transition: "background 0.3s ease",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.background = "rgba(240, 248, 255, 0.6)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.background = "rgba(240, 248, 255, 0.3)")
        }
      >
        Scroll Down
      </Button>
    </>
  );
};

export default ScrollDownButton;
