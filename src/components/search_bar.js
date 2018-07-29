import React, { Component } from 'react';
//const Component = React.Component ===> { Component }

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
      <div className="col-md-8 search-bar">
        <input 
          id="input"
          placeholder="Search..."
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
