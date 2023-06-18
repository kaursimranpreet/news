import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import App from "../ui/App";
import TitleBar from "./TitleBar";

export default class Render extends Component {
	render() {
		return (
			<div
				style={{
					backgroundColor: "#edeff2",
					width: "inherit",
					height: "inherit"
				}}
			>
				<Row>
					<Col md={12}>
						<TitleBar />
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<App />
					</Col>
				</Row>
			</div>
		);
	}
}
