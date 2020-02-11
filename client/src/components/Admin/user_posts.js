import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserPosts } from "../../actions";

class UserPosts extends Component {
	componentWillMount() {
		this.props.dispatch(getUserPosts(this.props.user.login.id));
	}
	render() {
		return (
			<div className="user_posts">
				<h4>Your reviews:</h4>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Author</th>
						</tr>
					</thead>
				</table>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		user: state.user
	};
}
export default connect(mapStateToProps)(UserPosts);
