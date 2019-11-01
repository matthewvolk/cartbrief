import React, { Component } from "react";
import "./App.css";
import { Container } from "reactstrap";
import axios from "axios";
import Logo from "./img/logo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      totalPages: [],
      url: `/api/news?`,
      page: "1",
      pageSize: "100",
      sortBy: ""
    };

    this.changePage = this.changePage.bind(this);
    this.changePageSize = this.changePageSize.bind(this);
    this.changeSortBy = this.changeSortBy.bind(this);
  }

  changePage = e => {
    this.setState({ page: e.target.innerText, isLoaded: false }, () => {
      axios
        .get(this.state.url, {
          params: {
            page: this.state.page,
            pageSize: this.state.pageSize,
            sortBy: this.state.sortBy
          }
        })
        .then(res => res.data)
        .then(json => {
          let range = [];
          for (
            var i = 1;
            i <= Math.ceil(json.totalResults / json.pageSize);
            i++
          ) {
            range.push(i);
          }

          this.setState({
            isLoaded: true,
            items: json,
            totalPages: range
          });
        })
        .catch(err => console.log(err));
    });
  };

  changePageSize = e => {
    this.setState({ pageSize: e.target.value, isLoaded: false }, () => {
      axios
        .get(this.state.url, {
          params: {
            page: this.state.page,
            pageSize: this.state.pageSize,
            sortBy: this.state.sortBy
          }
        })
        .then(res => res.data)
        .then(json => {
          let range = [];
          for (
            var i = 1;
            i <= Math.ceil(json.totalResults / json.pageSize);
            i++
          ) {
            range.push(i);
          }

          this.setState({
            isLoaded: true,
            items: json,
            totalPages: range
          });
        })
        .catch(err => console.log(err));
    });
  };

  changeSortBy = e => {
    this.setState({ sortBy: e.target.value, isLoaded: false }, () => {
      axios
        .get(this.state.url, {
          params: {
            page: this.state.page,
            pageSize: this.state.pageSize,
            sortBy: this.state.sortBy
          }
        })
        .then(res => res.data)
        .then(json => {
          let range = [];
          for (
            var i = 1;
            i <= Math.ceil(json.totalResults / json.pageSize);
            i++
          ) {
            range.push(i);
          }

          this.setState({
            isLoaded: true,
            items: json,
            totalPages: range
          });
        })
        .catch(err => console.log(err));
    });
  };

  componentDidMount() {
    axios
      .get(this.state.url, {
        params: {
          page: this.state.page,
          pageSize: this.state.pageSize,
          sortBy: this.state.sortBy
        }
      })
      .then(res => res.data)
      .then(json => {
        let range = [];
        for (
          var i = 1;
          i <= Math.ceil(json.totalResults / json.pageSize);
          i++
        ) {
          range.push(i);
        }

        this.setState({
          isLoaded: true,
          items: json,
          totalPages: range
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    var { items, isLoaded, totalPages } = this.state;

    if (!isLoaded) {
      return (
        <div className="App">
          <Container fluid={true}>
            <div className="header text-center mb-5 mt-4">
              <img src={Logo} width="75px" alt="Ecommerce News Logo" />
              <h1
                style={{
                  textTransform: "uppercase",
                  fontWeight: "700",
                  fontSize: "2.25em"
                }}
                className="mb-1"
              >
                E-commerce News
              </h1>
              <p
                className="mb-1 mt-1"
                style={{
                  maxWidth: "720px",
                  margin: "0 auto",
                  fontSize: "0.85rem",
                  color: "gray"
                }}
              >
                A website aggregating news articles from 30,000 news sources
                that include any mention of the word "e-commerce".
              </p>
              <p
                className="mb-1 mt-1"
                style={{ fontSize: "0.85rem", color: "gray" }}
              >
                Follow me on <a href="https://twitter.com/mattjvolk">Twitter</a>
              </p>
              {/* <div className="mb-2">
                <h2
                  style={{
                    fontSize: "1rem",
                    display: "inline",
                    marginRight: "1em"
                  }}
                >
                  <strong>Status:</strong> <kbd>Loading...</kbd>
                </h2>
                <h2
                  style={{
                    fontSize: "1rem",
                    display: "inline",
                    marginRight: "1em"
                  }}
                >
                  <strong>Results:</strong> <kbd>Loading...</kbd>
                </h2>
              </div>
              <div style={{ display: "inline", marginRight: "1em" }}>
                <strong>Sort By:</strong>&nbsp;
                <select onChange={e => this.changeSortBy(e)}>
                  <option value="publishedAt">Date Published</option>
                  <option value="relevancy">Relevency</option>
                  <option value="popularity">Popularity</option>
                </select>
              </div>
              <div style={{ display: "inline", marginRight: "1em" }}>
                <strong>Results per Page:</strong>&nbsp;
                <select onChange={e => this.changePageSize(e)}>
                  <option value="100">100</option>
                  <option value="50" disabled>
                    50
                  </option>
                  <option value="25" disabled>
                    25
                  </option>
                </select>
              </div> */}
            </div>
            <div style={{ fontSize: "1.5em" }} className="text-center">
              <kbd
                style={{
                  position: "relative",
                  top: "50%",
                  transform: "translateY(-50%)"
                }}
              >
                Loading...
              </kbd>
            </div>
          </Container>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Container fluid={true}>
            <div className="header text-center mb-4 mt-4">
              <img src={Logo} width="75px" alt="Ecommerce News Logo" />
              <h1
                style={{
                  textTransform: "uppercase",
                  fontWeight: "700",
                  fontSize: "2.25em"
                }}
                className="mb-1"
              >
                E-commerce News
              </h1>
              <p
                className="mb-1 mt-1"
                style={{
                  maxWidth: "720px",
                  margin: "0 auto",
                  fontSize: "0.85rem",
                  color: "gray"
                }}
              >
                A website aggregating news articles from 30,000 news sources
                that include any mention of the word "e-commerce".
              </p>
              <p
                className="mb-1 mt-1"
                style={{ fontSize: "0.85rem", color: "gray" }}
              >
                Follow me on <a href="https://twitter.com/mattjvolk">Twitter</a>
              </p>
              {/* <div className="mb-2">
                <h2
                  style={{
                    fontSize: "1rem",
                    display: "inline",
                    marginRight: "1em"
                  }}
                >
                  <strong>Status:</strong> <kbd>{items.status}</kbd>
                </h2>
                <h2
                  style={{
                    fontSize: "1rem",
                    display: "inline",
                    marginRight: "1em"
                  }}
                >
                  <strong>Results:</strong> <kbd>{items.totalResults}</kbd>
                </h2>
              </div>
              <div style={{ display: "inline", marginRight: "1em" }}>
                <strong>Sort By:</strong>&nbsp;
                <select onChange={e => this.changeSortBy(e)}>
                  <option value="publishedAt">Date Published</option>
                  <option value="relevancy">Relevency</option>
                  <option value="popularity">Popularity</option>
                </select>
              </div>
              <div style={{ display: "inline", marginRight: "1em" }}>
                <strong>Results per Page:</strong>&nbsp;
                <select onChange={e => this.changePageSize(e)}>
                  <option value="100">100</option>
                  <option value="50" disabled>
                    50
                  </option>
                  <option value="25" disabled>
                    25
                  </option>
                </select>
              </div> */}
            </div>
            <div
              className="articles"
              style={{ maxWidth: "720px", margin: "0 auto" }}
            >
              {items.articles.map((article, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid rgba(0,0,0,.1)",
                    borderRadius: "4px",
                    marginBottom: "1.75em",
                    padding: "1em"
                  }}
                >
                  <h5>
                    <strong>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {article.title}
                      </a>
                    </strong>
                  </h5>
                  <p style={{ marginBottom: "0" }}>
                    <strong>Source:</strong> {article.source.name} <br />
                    <strong>Published:</strong>{" "}
                    {new Date(article.publishedAt).toLocaleString()} <br />
                    <strong>Author:</strong> {article.author} <br />
                  </p>
                </div>
              ))}
            </div>
            <div
              style={{
                textAlign: "center",
                marginBottom: "1em",
                fontSize: "1.25em",
                marginTop: "2em"
              }}
            >
              <Container fluid={true}>
                {/* Page:&nbsp;
                {totalPages.map(page => (
                  <div key={page} style={{ display: "inline-block" }}>
                    <button onClick={e => this.changePage(e)}>{page}</button>
                    &nbsp;&nbsp;
                  </div>
                ))} */}
                Total Pages: {totalPages.slice(-1)[0]}
                <p style={{ color: "red", fontSize: ".8em" }}>
                  *Unfortunately there is an issue with{" "}
                  <a
                    style={{ color: "red", textDecoration: "underline" }}
                    href="https://newsapi.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://newsapi.org/
                  </a>{" "}
                  that prevents us from showing any results past result #100.
                  There are {totalPages.slice(-1)[0]} more pages of results, but
                  we cannot allow you to browse them until News API fixes their
                  API.
                </p>
              </Container>
            </div>
          </Container>
        </div>
      );
    }
  }
}

export default App;
