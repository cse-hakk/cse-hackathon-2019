import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  state = { 
    isLoading: false,
    results: [],
    value: ''
   };

  handleResultSelect = (e, { result }) => this.setState({ value: result.country })

  handleSearchChange = (e, { value }) => {
    this.setState({ value: value })
    var results = this.props.items.filter(item => item.country.substring(value))
    this.setState({results: results})
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