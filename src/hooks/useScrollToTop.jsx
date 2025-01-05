import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

const useScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollToTop);
    return function cleanup() {
      window.removeEventListener("scroll", scrollToTop);
    };
  });

  const scrollToTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", scrollToTop);

  const scrollToTopBtnStyle = {
    position: "fixed",
    width: "45px",
    height: "45px",
    display: showScroll ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "999",
    borderRadius: "10px",
    right: "50px",
    bottom: "50px",
    padding: "10px",
    background: "rgba(240, 248, 255, 0.3)",
    color: "rgb(2, 2, 54)",
    cursor: "pointer",
    animation: "fadeIn 0.3s",
    transition: "opacity 0.4s",
    opacity: "0.9",
  };

  const scrollToTopBtnHoverStyle = {
    background: "rgba(240, 248, 255, 0.6)",
  };

  const fadeInKeyframes = `
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `;

  return (
    <>
      <style>{fadeInKeyframes}</style>
      <FiChevronUp
        className="scrollToTopBtn"
        onClick={backToTop}
        style={scrollToTopBtnStyle}
        onMouseOver={(e) =>
          (e.currentTarget.style.background =
            scrollToTopBtnHoverStyle.background)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.background = "rgba(240, 248, 255, 0.3)")
        }
      />
    </>
  );
};

export default useScrollToTop;
