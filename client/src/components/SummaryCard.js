import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;


function SummaryCard(props) {
  return (
    <Card
      hoverable
      style = {{width: 200}}
      bordered = {false}
      margin = {5}
      >
        <div style={{'border-style': 'solid', 'border-width': 1}}>
          Title
        </div>
        <span>
          text 1
        </span>
        <span>
          text 2
        </span>
      </Card>
  )
}

export default SummaryCard;