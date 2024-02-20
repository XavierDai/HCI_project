import React from "react";
import "./NavBar.css";

const Navbar = (props) => {
  const { Tabs } = props;
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="MediConnect Logo" />
        <h1>MediConnect</h1>
      </div>
      <nav className="navbar-navigation">
        <ul>
          {Tabs.map((tab) => (
            <>
              <li key={tab.title}>
                <a href="#">{tab.title}</a>
              </li>
            </>
          ))}
        </ul>
      </nav>

      <div className="navbar-login">
        <button>Login</button>
      </div>
    </header>
  );
};

export default Navbar;
