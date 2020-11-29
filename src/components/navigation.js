import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
  {
    title: "Login",
    path: "/login",
  },
];

export default function Navigation({ user }) {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const mobileMenuRef = useRef();

  const handleClickOutsideMobileMenu = (e) => {
    if (!mobileMenuRef.current.contains(e.target)) {
      setMobileMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMobileMenu);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideMobileMenu);
  });

  return (
    <nav className="site-navigation" ref={mobileMenuRef}>
      <span className="menu-title">Blog</span>
      <div className={`menu-content-container ${mobileMenuActive && "active"}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <span className="menu-avatar-container">
          <Avatar
            size={38}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
        </span>
      </div>
      <i
        className="ionicons icon ion-ios-menu"
        onClick={() => setMobileMenuActive(!mobileMenuActive)}
      />
    </nav>
  );
}
