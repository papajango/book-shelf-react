import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function SideNavItems({ user }) {
	const items = [
		{
			type: 'navItem',
			icon: 'home',
			text: 'Home',
			link: '/',
			restricted: false
		},
		{
			type: 'navItem',
			icon: 'file-text-o',
			text: 'My profile',
			link: '/user',
			restricted: true
		},
		{
			type: 'navItem',
			icon: 'file-text-o',
			text: 'Add Admins',
			link: '/user/register',
			restricted: true
		},
		{
			type: 'navItem',
			icon: 'fa-sign-in',
			text: 'Login',
			link: '/login',
			restricted: false,
			exclude: true
		},
		{
			type: 'navItem',
			icon: 'fa-sign-in',
			text: 'My reviews',
			link: '/user/user-reviews',
			restricted: true
		},
		{
			type: 'navItem',
			icon: 'file-text-o',
			text: 'Add reviews',
			link: '/user/add',
			restricted: true
		},
		{
			type: 'navItem',
			icon: 'fa-sign-out',
			text: 'Logout',
			link: '/user/logout',
			restricted: true
		}
	];

	const element = (item, i) => {
		return (
			<div key={i} className={item.type}>
				<Link to={item.link} style={{ color: '#fff' }}>
					<FontAwesome name={item.icon} />
					{item.text}
				</Link>
			</div>
		);
	};
	const showItems = () =>
		user.login
			? items.map((item, i) => {
					if (user.login.isAuth) {
						return !item.exclude ? element(item, i) : null;
					} else {
						return !item.restricted ? element(item, i) : null;
					}
			  })
			: null;
	return <div>{showItems()}</div>;
}
function mapStateToProps(state) {
	return {
		user: state.user
	};
}
export default connect(mapStateToProps)(SideNavItems);
