import React, { Component } from "react";
import { connect } from "react-redux";
import { addBook, clearNewBook } from "../../actions";
import { Link } from "react-router-dom";
class AddBook extends Component {
	state = {
		formdata: {
			name: "",
			author: "",
			review: "",
			pages: "",
			rating: "",
			price: ""
		}
	};
	submitForm = e => {
		e.preventDefault();
		this.props.dispatch(
			addBook({
				...this.state.formdata,
				ownerId: this.props.user.login.id
			})
		);
	};
	handleInput = (e, name) => {
		const newFormData = {
			...this.state.formdata
		};
		newFormData[name] = e.target.value;
		this.setState({
			formdata: newFormData
		});
	};
	showNewBook = book =>
		book.post ? (
			<div className="conf_link">
				Cool !!{" "}
				<Link to={`/books/${book.bookId}`}>
					Click the link to see the post
				</Link>
			</div>
		) : null;

	componentWillUnmount() {
		this.props.dispatch(clearNewBook());
	}
	render() {
		return (
			<div className="rl_container article">
				<form onSubmit={this.submitForm}>
					<h2>Add a review</h2>
					<div className="form_element">
						<input
							type="text"
							placeholder="Enter name"
							value={this.state.formdata.name}
							onChange={e => this.handleInput(e, "name")}
						/>
					</div>
					<div className="form_element">
						<input
							type="text"
							placeholder="Enter author"
							value={this.state.formdata.author}
							onChange={e => this.handleInput(e, "author")}
						/>
					</div>
					<textarea
						value={this.state.formdata.review}
						onChange={e => this.handleInput(e, "review")}
					/>
					<div className="form_element">
						<input
							type="number"
							placeholder="Enter pages"
							value={this.state.formdata.pages}
							onChange={e => this.handleInput(e, "pages")}
						/>
					</div>
					<div className="form_element">
						<select
							value={this.state.formdata.rating}
							onChange={e => this.handleInput(e, "rating")}
						>
							<option val="1">1</option>
							<option val="2">2</option>
							<option val="3">3</option>
							<option val="4">4</option>
							<option val="5">5</option>
						</select>
					</div>
					<div className="form_element">
						<input
							type="number"
							placeholder="Enter price"
							value={this.state.formdata.price}
							onChange={e => this.handleInput(e, "price")}
						/>
					</div>
					<button type="submit">Add review</button>
					{this.props.books.newbook
						? this.showNewBook(this.props.books.newbook)
						: null}
				</form>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		books: state.books
	};
}
export default connect(mapStateToProps)(AddBook);
