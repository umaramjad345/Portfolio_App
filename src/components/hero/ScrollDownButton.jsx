import { useState, useEffect, useCallback } from "react";
import { Button, Tooltip } from "antd";
import { FiChevronDown } from "react-icons/fi";

const ScrollDownButton = () => {
  const backToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <Tooltip title="Scroll Down">
      <Button
        onClick={backToBottom}
        style={{
          width: "45px", // Reduced size for a smaller button
          height: "45px", // Same height as width to keep it circular
          borderRadius: "30px", // Makes the button circular
          background: "rgba(47, 47, 48, 0.34)",
          color: "var(--text-color)",
          padding: "10px",
          border: "none",
          display: "flex",
          justifyContent: "center", // Centers the icon horizontally
          alignItems: "center", // Centers the icon vertically
          cursor: "pointer",
          transition: "background 0.3s ease",
          // writingMode: "vertical-lr",
          // transform: "rotate(90deg)",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.background = "rgba(240, 248, 255, 0.6)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.background = "rgba(47, 47, 48, 0.34)")
        }
      >
        <FiChevronDown style={{ fontSize: "1.25rem" }} />
      </Button>
    </Tooltip>
  );
};

export default ScrollDownButton;
