import React, { Component } from "react";
import Loading from './Loading';
import { XMasonry, XBlock } from "./xmasonry";
import * as moment from "moment";
import "../styles/styles.css";
import "../styles/App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ""
    };
  }
  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () => {
    this.everyNews()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  };

  everyNews = async () => {
    const response = await fetch("/topHeadlines");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  renderContainer = () => {
    const { response } = this.state;
    if (response) {
      return response.articles.map((res, option) => {
        return (
          <XBlock key={option}>
            <div className="card" style={{ position: "relative" }}>
              {res.urlToImage && <img src={res.urlToImage} alt="img"/>}
              <div className="card-content">
                <h4>{res.title}</h4>
                <p>
                  {res.description}
                  ...
                  <a href={res.url} target="_blank" rel="noopener noreferrer">
                    (more)
                  </a>
                </p>
                <div
                  style={{
                    fontSize: "10px",
                    fontStyle: "italic",
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <div> {moment(res.publishedAt).fromNow()}</div>
                  <div>{res.author}</div>
                </div>
              </div>
            </div>
          </XBlock>
        );
      });
    }
  };
  render() {
    const { response } = this.state;
    if (!response) {
      return (
        <Loading/>
      );
    }
    return (
      <div>{response && <XMasonry>{this.renderContainer()}</XMasonry>}</div>
    );
  }
}
