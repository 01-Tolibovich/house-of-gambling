import { NavLink } from "react-router-dom";
import { ActionButtons } from "./actionButtons";

import "./styles.scss";

const Header = () => {
  const mainMenu = [
    {
      text: "About us",
      link: "#",
    },
    {
      text: "Brands",
      link: "#",
    },
    {
      text: "Commissions",
      link: "#",
    },
    {
      text: "News",
      link: "#",
    },
    {
      text: "Contact us",
      link: "#",
    },
    {
      text: "Careers",
      link: "#",
    },
  ];
  return (
    <header className="header-wrapper">
      <nav className="nav-menu">
        <ul>
          {mainMenu.map((page, index) => (
            <li key={index}>
              <NavLink to={page.link}>{page.text}</NavLink>
            </li>
          ))}
        </ul>
        <ActionButtons />
      </nav>
    </header>
  );
};

export default Header;
