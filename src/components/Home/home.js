import { Component } from "react";

import "./home.css";

import Navbar from "../Navbar/navbar";
import ArticleCard from "../ArticleCard/article";

class Home extends Component {
  state = { newsList: [], isLoading: true, category: "all", searchInput: "" };

  getSearchBasedNews = async (search) => {
    const { category } = this.state;

    let url;

    if (category == "all") {
      url = `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=c20cc076652a4415ae202af91eb34696`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?q=${search}&category=${category}&apiKey=c20cc076652a4415ae202af91eb34696`;
    }

    this.setState({ searchInput: search });
    this.getNewsData(url);
  };

  getCategoryBasedNews = async (category) => {
    const { searchInput } = this.state;

    let url;

    if (category == "all" && searchInput == "") {
      url =
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=c20cc076652a4415ae202af91eb34696";
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchInput}&apiKey=c20cc076652a4415ae202af91eb34696`;
    }

    this.getNewsData(url);
    this.setState({ category: category });
  };

  getNewsData = async (url) => {
    this.setState({ isLoading: true });

    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    const data = await response.json();
    this.setState({ newsList: data.articles, isLoading: false });
  };

  componentDidMount() {
    let url =
      "https://gnews.io/api/v4/top-headlines?category=general&apikey=b950a58677fb02c05181f1fa83135836";
    this.getNewsData(url);
  }

  render() {
    const { newsList, isLoading } = this.state;

    return (
      <div className="news-app-bg-container">
        <Navbar
          getCategoryBasedNews={this.getCategoryBasedNews}
          getSearchBasedNews={this.getSearchBasedNews}
        />
        {isLoading && (
          <div className="news-app-spinner">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {!isLoading && (
          <ul className="article-card-bg-container">
            {newsList.map((eachNews) => (
              <ArticleCard newsDetails={eachNews} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Home;
