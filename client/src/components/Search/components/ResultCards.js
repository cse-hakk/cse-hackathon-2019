import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class ResultCards extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }
  state = {  }
  render() { 
    return ( 
      <div>
        <Card
          header={this.props.locationName}
          />
      </div>
     );
  }
}
 
export default ResultCards;