import React from 'react';
import './FeedbackBlock.css';
import FeedbackItem from './FeedbackItem';
import {connect} from 'react-redux';

const FeedbackBlock = (props) => {
    return (
        <div className={"FeedbackBlock"}>
            {
                props.feedback.map((Feedback, index) => {
                    return <FeedbackItem
                        key={index + [Feedback.username]}
                        username={Feedback.username}
                        feedbackText={Feedback.feedbackText}
                        userAvatar={Feedback.userAvatar}
                    />
                }).slice(0, 2)
            }
        </div>
    )
};

function mapStateToProps(state) {
    return {
        feedback: state.feedbackPage.Feedback,
    }
}

export default connect(mapStateToProps)(FeedbackBlock);