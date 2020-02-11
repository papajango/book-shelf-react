import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Layout from './hoc/layout';
import BookView from './components/Book/book';
import Login from './containers/Admin/login';
import Auth from './hoc/auth';
import User from './components/Admin/admin';
import AddBook from './containers/Admin/add';
import EditReview from './containers/Admin/edit';
import UserPosts from './components/Admin/user_posts';
import Register from './containers/Admin/register';
import Logout from './components/Admin/logout';

const Routes = () => {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact component={Auth(Home, null)} />

				<Route path="/login" exact component={Auth(Login, false)} />
				<Route
					path="/user/logout"
					exact
					component={Auth(Logout, true)}
				/>
				<Route path="/user" exact component={Auth(User, true)} />
				<Route
					path="/books/:id"
					exact
					component={Auth(BookView, null)}
				/>
				<Route path="/user/add" exact component={Auth(AddBook, true)} />
				<Route
					path="/user/register"
					exact
					component={Auth(Register, true)}
				/>
				<Route
					path="/user/user-reviews"
					exact
					component={Auth(UserPosts, true)}
				/>
				<Route
					path="/user/edit-post/:id"
					exact
					component={Auth(EditReview, true)}
				/>
			</Switch>
		</Layout>
	);
};
export default Routes;
