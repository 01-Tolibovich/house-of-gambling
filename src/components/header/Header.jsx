import { useState } from "react";

import { NavLink } from "react-router-dom";
import { ActionButtons } from "./actionButtons";

import "./styles.scss";

const Header = () => {
  const [mobileMenuButton, setMobileMenuButton] = useState(false);

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

  const menuShowToggle = () => {
    setMobileMenuButton(!mobileMenuButton)
  }

	return (
		<header className="header-wrapper">
			<nav className="nav-menu">
				<ul className={`${mobileMenuButton && "nav-list-is-open"}`}>
					{mainMenu.map((page, index) => (
						<li key={index}>
							<NavLink to={page.link}>{page.text}</NavLink>
						</li>
					))}
					<div className="mobile-user-actions">
						<NavLink>LOG IN</NavLink>
						<NavLink>SIGN UP</NavLink>
					</div>
				</ul>
				<ActionButtons mobileMenuButton={mobileMenuButton} menuShowToggle={menuShowToggle}/>
			</nav>
		</header>
	);
};

export default Header;
