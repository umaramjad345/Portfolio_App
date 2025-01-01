import { useState, useEffect } from "react";
import { HashRouter as Router, NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Menu, Drawer, Row, Col } from "antd";
import { NavHashLink, HashLink } from "react-router-hash-link";
import Resume from "../assets/Resume.pdf";
import {
  MenuOutlined,
  MoonOutlined,
  SunOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import { useMediaQuery } from "react-responsive";

const HeaderView = () => {
  const [isActive, setActive] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const closeMenu = () => {
    setActive(false);
  };

  const menuItems = [
    {
      key: "home",
      label: (
        <a
          to="#home"
          onClick={closeMenu}
          style={{ color: "var(--text-color)", textDecoration: "none" }}
        >
          Home
        </a>
      ),
    },
    {
      key: "about",
      label: (
        <a
          to="#about"
          onClick={closeMenu}
          style={{ color: "var(--text-color)", textDecoration: "none" }}
        >
          About me
        </a>
      ),
    },
    {
      key: "project",
      label: (
        <a
          to="#project"
          onClick={closeMenu}
          style={{ color: "var(--text-color)", textDecoration: "none" }}
        >
          Project
        </a>
      ),
    },
    {
      key: "contact",
      label: (
        <a
          to="#contact"
          onClick={closeMenu}
          style={{ color: "var(--text-color)", textDecoration: "none" }}
        >
          Contact
        </a>
      ),
    },
    {
      key: "resume",
      label: (
        <a
          href={Resume}
          download
          style={{
            color: "var(--text-color)",
            textDecoration: "none",
          }}
        >
          Resume
        </a>
      ),
    },
  ];

  // const menuItems = [
  //   {
  //     key: "home",
  //     label: (
  //       <Link
  //         to="home" // ID of the section
  //         smooth={true}
  //         offset={-50} // Adjust for any header or padding
  //         duration={500}
  //         onClick={closeMenu}
  //         style={{ color: "var(--text-color)" }}
  //       >
  //         Home
  //       </Link>
  //     ),
  //   },
  //   {
  //     key: "about",
  //     label: (
  //       <Link
  //         to="about" // ID of the section
  //         smooth={true}
  //         offset={-50}
  //         duration={500}
  //         onClick={closeMenu}
  //         style={{ color: "var(--text-color)" }}
  //       >
  //         About me
  //       </Link>
  //     ),
  //   },
  //   {
  //     key: "project",
  //     label: (
  //       <Link
  //         to="project"
  //         smooth={true}
  //         offset={-50}
  //         duration={500}
  //         onClick={closeMenu}
  //         style={{ color: "var(--text-color)" }}
  //       >
  //         Project
  //       </Link>
  //     ),
  //   },
  //   {
  //     key: "contact",
  //     label: (
  //       <Link
  //         to="contact"
  //         smooth={true}
  //         offset={-50}
  //         duration={500}
  //         onClick={closeMenu}
  //         style={{ color: "var(--text-color)" }}
  //       >
  //         Contact
  //       </Link>
  //     ),
  //   },
  //   {
  //     key: "resume",
  //     label: (
  //       <a href={Resume} download>
  //         Resume
  //       </a>
  //     ),
  //   },
  // ];

  return (
    <Router>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          zIndex: 50,
          padding: "16px 0",
          backgroundColor: "var(--bg-color)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Row justify="space-between" align="middle" className="container">
          <Col>
            <NavLink exact to="home">
              <span style={{ fontSize: "1.6rem", color: "var(--text-color)" }}>
                {"Umar Amjad"}
              </span>
            </NavLink>
          </Col>
          <Col>
            <Row
              justify="end"
              align="middle"
              style={{ color: "var(--text-color)" }}
            >
              {/* Desktop Menu */}
              {!isMobile && (
                <Col>
                  <Menu
                    style={{ backgroundColor: "transparent", border: "none" }}
                    mode="horizontal"
                    items={menuItems}
                    overflowedItem={null}
                  />
                </Col>
              )}

              <Col>
                <div
                  onClick={() => setTheme(activeTheme)}
                  aria-label="Theme Switcher"
                  style={{
                    backgroundColor: "var(--text-color)",
                    color: "var(--bg-color)",
                    backdropFilter: "blur(10px)",
                    padding: "10px",
                    marginLeft: "8px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  {activeTheme === "dark" ? (
                    <MoonOutlined style={{ fontSize: "24px" }} />
                  ) : (
                    <SunOutlined style={{ fontSize: "24px" }} />
                  )}
                </div>
              </Col>

              {isMobile && (
                <Col>
                  <div
                    onClick={() => setActive(!isActive)}
                    style={{ width: "30px", cursor: "pointer" }}
                  >
                    <MenuOutlined style={{ fontSize: "24px", color: "#fff" }} />
                  </div>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
        <Drawer
          placement="top"
          open={isActive}
          onClose={closeMenu}
          width="70%"
          closable={true}
          // closeIcon={null}
          closeIcon={
            <CloseOutlined
              style={{ fontSize: "24px", marginRight: "10px", float: "right" }}
            />
          }
          style={{ zIndex: 1001 }}
        >
          <Menu
            theme={activeTheme === "dark" ? "dark" : "light"}
            mode="inline"
            items={menuItems}
          />
        </Drawer>
      </div>
    </Router>
  );
};

const styles = {
  menuLink: {
    color: "var(--text-color)",
    textDecoration: "none",
  },
};
export default HeaderView;

// import { useState, useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Menu, Switch, Drawer, Row, Col } from "antd";
// import { NavHashLink, HashLink } from "react-router-hash-link";
// import Resume from "../assets/Resume.pdf";
// import {
//   MenuOutlined,
//   MoonOutlined,
//   SunOutlined,
//   CloseOutlined,
// } from "@ant-design/icons";
// import useThemeSwitcher from "../hooks/useThemeSwitcher";
// import { useMediaQuery } from "react-responsive";

// const HeaderView = () => {
//   const [isActive, setActive] = useState(false);
//   const [activeTheme, setTheme] = useThemeSwitcher();

//   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

//   const closeMenu = () => {
//     setActive(false);
//   };

//   return (
//     <Router>
//       <div
//         className={fixed top-0 left-0 w-full flex justify-center items-center z-50 dark:bg-[#212121] light:bg-[#f5f5f5] backdrop-blur-[6px] py-6}
//       >
//         <Row justify="space-between" align="middle" style={{ width: "80%" }}>
//           <Col>
//             <HashLink smooth to="#home">
//               <span style={{ fontSize: "1.6rem", color: "var(--text-color)" }}>
//                 {"Umar Amjad"}
//               </span>
//             </HashLink>
//           </Col>
//           <Col>
//             <Row
//               justify="end"
//               align="middle"
//               style={{ color: "var(--text-color)" }}
//             >
//               {/* Desktop Menu */}
//               {!isMobile && (
//                 <Col>
//                   <Menu
//                     style={{ backgroundColor: "transparent", border: "none" }}
//                     mode="horizontal"
//                     selectable={false}
//                   >
//                     <Menu.Item key="home">
//                       <NavHashLink
//                         smooth
//                         to="#home"
//                         onClick={closeMenu}
//                         style={{ color: "var(--text-color)" }}
//                       >
//                         Home
//                       </NavHashLink>
//                     </Menu.Item>
//                     <Menu.Item key="about">
//                       <NavHashLink
//                         smooth
//                         to="#about"
//                         onClick={closeMenu}
//                         style={{ color: "var(--text-color)" }}
//                       >
//                         About me
//                       </NavHashLink>
//                     </Menu.Item>
//                     <Menu.Item key="project">
//                       <NavHashLink
//                         smooth
//                         to="#project"
//                         onClick={closeMenu}
//                         style={{ color: "var(--text-color)" }}
//                       >
//                         Project
//                       </NavHashLink>
//                     </Menu.Item>
//                     <Menu.Item key="contact">
//                       <NavHashLink
//                         smooth
//                         to="#contact"
//                         onClick={closeMenu}
//                         style={{ color: "var(--text-color)" }}
//                       >
//                         Contact
//                       </NavHashLink>
//                     </Menu.Item>
//                     <Menu.Item key="resume">
//                       <a href={Resume} download>
//                         Resume
//                       </a>
//                     </Menu.Item>
//                   </Menu>
//                 </Col>
//               )}

//               {/* Theme Switcher */}
//               <Col>
//                 <div
//                   onClick={() => setTheme(activeTheme)}
//                   aria-label="Theme Switcher"
//                   className="ml-8 p-3 shadow-sm rounded-xl cursor-pointer"
//                   style={{
//                     backgroundColor: "var(--text-color)",
//                     color: "var(--bg-color)",
//                     backdropFilter: "blur(10px)",
//                     padding: "10px",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {activeTheme === "dark" ? (
//                     <MoonOutlined className="hover:text-gray-400 text-xl" />
//                   ) : (
//                     <SunOutlined className="hover:text-gray-50 text-xl" />
//                   )}
//                 </div>
//               </Col>

//               {/* Mobile Menu Icon */}
//               {isMobile && (
//                 <Col>
//                   <div onClick={() => setActive(!isActive)} className="w-8">
//                     <MenuOutlined style={{ fontSize: "24px", color: "#fff" }} />
//                   </div>
//                 </Col>
//               )}
//             </Row>
//           </Col>
//         </Row>
//         <Drawer
//           placement="top"
//           open={isActive}
//           onClose={closeMenu}
//           width="70%"
//           closable={true}
//           // closeIcon={null}
//           closeIcon={
//             <CloseOutlined
//               style={{ fontSize: "24px", marginRight: "10px", float: "right" }}
//             />
//           }
//           style={{ zIndex: 1001 }}
//         >
//           <Menu
//             theme={activeTheme === "dark" ? "dark" : "light"}
//             mode="inline"
//             selectable={false}
//           >
//             <Menu.Item key="home">
//               <NavHashLink smooth to="#home" onClick={closeMenu}>
//                 Home
//               </NavHashLink>
//             </Menu.Item>
//             <Menu.Item key="about">
//               <NavHashLink smooth to="#about" onClick={closeMenu}>
//                 About me
//               </NavHashLink>
//             </Menu.Item>
//             <Menu.Item key="project">
//               <NavHashLink smooth to="#project" onClick={closeMenu}>
//                 Project
//               </NavHashLink>
//             </Menu.Item>
//             <Menu.Item key="contact">
//               <NavHashLink smooth to="#contact" onClick={closeMenu}>
//                 Contact
//               </NavHashLink>
//             </Menu.Item>
//             <Menu.Item key="resume">
//               <a href={Resume} download>
//                 Resume
//               </a>
//             </Menu.Item>
//           </Menu>
//         </Drawer>
//       </div>
//     </Router>
//   );
// };

// export default HeaderView;
