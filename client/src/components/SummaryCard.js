import React from 'react';

import { Card, Row, Col } from 'antd';
import '../css/cards.css'

const { Meta } = Card;

function SummaryCard(props) {
  return (
    <Card
      hoverable
      className={'summaryCard'}
      >
        <div>
        <span>
          {props.locationName}
        </span>
          <span>
            {props.}
          </span>
        </div>
        <div>
          <span>
            props.
          </span>
          <span>
            text 2slkfm as;ilrgjp sojh o[dmg o[h[]]]
          </span>
        </div>
      </Card>
  )
}

function CardList(props) {
  return (
    <div>
      <SummaryCard/>  
    </div>
  )
}
export default CardList;