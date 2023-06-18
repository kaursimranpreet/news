import React, { Component } from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { browserHistory } from "react-router";

export default class TitleBar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick = ref => {
		browserHistory.push(`${ref}`);
	};

	render() {
		return (
			<Navbar staticTop={true} inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<div
							onClick={() => this.handleClick("/")}
							style={{ cursor: "pointer" }}
						>
							CrateOn
						</div>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem
							eventKey="tech"
							onSelect={() => this.handleClick("/tech")}
						>
							Technology
						</NavItem>
						<NavItem
							eventKey="business"
							onSelect={() => this.handleClick("/business")}
						>
							Business
						</NavItem>
						<NavItem
							eventKey="science"
							onSelect={() => this.handleClick("/science")}
						>
							Science
						</NavItem>
						<NavItem
							eventKey="art"
							onSelect={() => this.handleClick("/art")}
						>
							Art
						</NavItem>
						<NavItem
							eventKey="programming"
							onSelect={() => this.handleClick("/programming")}
						>
							Programming
						</NavItem>
						<NavItem
							eventKey="indiaNews"
							onSelect={() => this.handleClick("/indianews")}
						>
							News India
						</NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem
							eventKey={6}
							href="https://newsapi.org"
							target="_blank"
						>
							@NewsAPIorg
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
