import { Component } from "react";

import { FaGlobeAmericas } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

import "./navbar.css";

class Navbar extends Component {
  state = { searchInput: "" };

  onClickSearch = () => {
    const { getSearchBasedNews } = this.props;
    const { searchInput } = this.state;
    getSearchBasedNews(searchInput);
  };

  onChangeSearchInput = (event) => {
    const { searchInput } = this.state;
    const { setSearchInput } = this.props;
    setSearchInput(event.target.value);
    this.setState({ searchInput: event.target.value });
  };

  onChangeSelect = (event) => {
    const { getCategoryBasedNews } = this.props;
    getCategoryBasedNews(event.target.value);
  };

  render() {
    return (
      <div className="navbar-bg-container">
        <div className="logo-container">
          <FaGlobeAmericas className="logo" />
          <p className="logo-text">GLOBAL NEWS</p>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
          <IoSearch className="search-icon" onClick={this.onClickSearch} />
        </div>
        <select
          className="select-category"
          placeholder="Category"
          onChange={this.onChangeSelect}
        >
          <option selected value="general">
            General
          </option>
          <option value="world">World</option>
          <option value="nation">Nation</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
          <option value="sports">Sports</option>
          <option value="science">Science</option>
          <option value="health">Health</option>
        </select>
      </div>
    );
  }
}

export default Navbar;
