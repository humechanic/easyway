import React from 'react';
import './FeedbackItem.css';

const FeedbackItem = (props) => {
    return (
        <div className={"FeedbackItem"}>
            <div className={"User"}>
                <img src={[props.userAvatar]} alt={''}/>
                <span>{props.username}</span>
            </div>
            <div className={"UserFeedback"}>
                <p>{props.feedbackText}</p>
            </div>
        </div>

    )
};

export default FeedbackItem;