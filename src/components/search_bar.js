import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <nav className="search-bar">
        <div className="container">
          <div className="logo">
            <a href="#">
              <i className="fa fa-bolt fa-2x" aria-hidden="true"></i>
            </a>
          </div>
          <input
            placeholder="Instant Search"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
          <div className="twitter">
            <a href="https://twitter.com/AndreWatts85" target="_blank">
              <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </nav>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
};

export default SearchBar;
