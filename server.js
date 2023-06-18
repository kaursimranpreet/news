require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI([process.env.NEWS_API_KEY]);
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
	// Serve any static files
	app.use(express.static(__dirname));
	app.use(express.static(path.join(__dirname, "build")));
	// Handle React routing, return all requests to React app
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "build", "index.html"));
	});
}

app.get("/tech", (req, res) => {
	newsapi.v2
		.everything({
			q: "technology",
			language: "en",
			sortBy: "publishedAt"
		})
		.then(response => {
			res.send(response);
		});
});

app.get("/business", (req, res) => {
	newsapi.v2
		.everything({
			q: "business",
			language: "en",
			sortBy: "publishedAt"
		})
		.then(response => {
			res.send(response);
		});
});

app.get("/science", (req, res) => {
	newsapi.v2
		.everything({
			q: "science",
			language: "en",
			sortBy: "publishedAt"
		})
		.then(response => {
			res.send(response);
		});
});

app.get("/art", (req, res) => {
	newsapi.v2
		.everything({
			q: "art",
			language: "en",
			sortBy: "publishedAt"
		})
		.then(response => {
			res.send(response);
		});
});

app.get("/programming", (req, res) => {
	newsapi.v2
		.everything({
			q: "programming",
			language: "en",
			sortBy: "publishedAt"
		})
		.then(response => {
			res.send(response);
		});
});

app.get("/topHeadlines", (req, res) => {
	newsapi.v2
		.topHeadlines({
			category: "general",
			country: "us"
		})
		.then(response => {
			res.send(response);
		});
});

app.get("/indianews", (req, res) => {
	newsapi.v2
		.topHeadlines({
			category: "general",
			country: "in"
		})
		.then(response => {
			res.send(response);
		});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
