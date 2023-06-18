import React, { Component } from "react";

export default class Title extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { title } = this.props;
		return <h1>{title}</h1>;
	}
}
