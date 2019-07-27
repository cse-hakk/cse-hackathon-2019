import React from 'react';
import { Rate } from 'antd';

function RatingCard(props) {

    return (
        //props.rating means you take the value of the variable 'rating'
        //span just means inline text
        <div>
            <Rate allowHalf defaultValue={props.rating} />
        </div>
    )
}

export default RatingCard