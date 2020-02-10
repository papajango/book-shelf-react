import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

class Login extends Component {
	state = {
		email: '',
		password: '',
		error: '',
		success: false
	};
	submitForm = e => {
		e.preventDefault();
		this.props.dispatch(loginUser(this.state));
	};

	handleInpuEmail = event => {
		this.setState({
			email: event.target.value
		});
	};
	handleInputPassword = event => {
		this.setState({
			password: event.target.value
		});
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.user.login.isAuth) {
			this.props.history.push('/user');
		}
	}
	render() {
		const { user } = this.props;
		return (
			<div className="rl_container">
				<form onSubmit={this.submitForm}>
					<h2>Login here</h2>
					<div className="form_element">
						<input
							type="email"
							value={this.state.email}
							onChange={this.handleInpuEmail}
							placeholder="Enter your mail"
						/>
					</div>
					<div className="form_element">
						<input
							type="password"
							value={this.state.password}
							onChange={this.handleInputPassword}
							placeholder="Enter your password"
						/>
					</div>
					<button type="submit">Log in</button>
					<div className="error">
						{user.login ? <div>{user.login.message}</div> : null}
					</div>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

export default connect(mapStateToProps)(Login);
