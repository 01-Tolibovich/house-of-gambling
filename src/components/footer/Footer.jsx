import { NavLink } from "react-router-dom";

import { ReactComponent as Twitter } from "../../assets/icons/social-media-icons/twitter.svg";
import { ReactComponent as Facebook } from "../../assets/icons/social-media-icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/social-media-icons/instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/social-media-icons/youtube.svg";
import { ReactComponent as Tiktok } from "../../assets/icons/social-media-icons/tiktok.svg";
import { ReactComponent as Telegram } from "../../assets/icons/social-media-icons/telegram.svg";
import { ReactComponent as VK } from "../../assets/icons/social-media-icons/vk.svg";

import "./styles.scss";

const Footer = () => {
	const footerLinks = [
		{
			text: "Terms & Conditions",
			link: "#",
		},
		{
			text: "Cookies",
			link: "#",
		},
		{
			text: "Contacts",
			link: "#",
		},
		{
			text: "Careers",
			link: "#",
		},
		{
			text: "Brand Guide",
			link: "#",
		},
	];
	return (
		<footer className="footer">
			<div className="container footer-section">
				<ul className="footer-links">
					{footerLinks.map((link, index) => (
						<li key={index}>
							<NavLink to={link.link}>{link.text}</NavLink>
						</li>
					))}
				</ul>
				<div className="social-wrapper">
					<div className="social-medias-title">Our social media:</div>
					<div className="social-medias-icon">
						<Twitter />
						<Facebook />
						<Instagram />
						<Youtube />
						<Tiktok />
						<Telegram />
						<VK />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
