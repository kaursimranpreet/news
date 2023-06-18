import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Pages from "./Pages";
import TitleBar from "../../TitleBar";

export default class RenderBusinessPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ref: ""
		};
	}

	render() {
		return (
			<div style={{ backgroundColor: "#edeff2" }}>
				<Row>
					<Col md={12}>
						<TitleBar />
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<Pages />
					</Col>
				</Row>
			</div>
		);
	}
}
