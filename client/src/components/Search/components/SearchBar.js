import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';

class SearchBar extends Component {
  state = { 
    isLoading: false,
    results: [],
    value: ''
   };

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ value: value })
  }
  
  render() { 
    const {isLoading, results, value} = this.state;
    return ( 
      <div>
        <Search
          isLoading={isLoading}
          onResultSelect={this.onResultSelect}
          onSearchChange={this.handleSearchChange}
          results={results}
          value={value}
          {...this.props}
          />
      </div>
     );
  }
}
 
export default SearchBar;