import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

export default function SideNavItems() {
	const items = [
		{
			type: "navItem",
			icon: "home",
			text: "Home",
			link: "/",
			restricted: false
		},
		{
			type: "navItem",
			icon: "file-text-o",
			text: "My profile",
			link: "/user",
			restricted: false
		},
		{
			type: "navItem",
			icon: "file-text-o",
			text: "Add Admins",
			link: "/user/register",
			restricted: false
		},
		{
			type: "navItem",
			icon: "fa-sign-in",
			text: "Login",
			link: "/login",
			restricted: false
		},
		{
			type: "navItem",
			icon: "fa-sign-in",
			text: "My reviews",
			link: "/user/user-reviews",
			restricted: false
		},
		{
			type: "navItem",
			icon: "file-text-o",
			text: "Add reviews",
			link: "/user/add",
			restricted: false
		},
		{
			type: "navItem",
			icon: "fa-sign-out",
			text: "Logout",
			link: "/user/logout",
			restricted: false
		}
	];

	const element = (item, i) => {
		return (
			<div key={i} className={item.type}>
				<Link to={item.link} style={{ color: "#fff" }}>
					<FontAwesome name={item.icon} />
					{item.text}
				</Link>
			</div>
		);
	};
	const showItems = () => {
		return items.map((item, i) => element(item, i));
	};
	return <div>{showItems()}</div>;
}
