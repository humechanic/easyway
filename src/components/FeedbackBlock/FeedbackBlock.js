import React, {Component} from 'react';
import './FeedbackBlock.css';
import FeedbackItem from './FeedbackItem';
import Avatar from './../../img/MainPage/Avatar.png';
import Avatar1 from './../../img/MainPage/Avatar1.png';

class FeedbackBlock extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Feedback: [
                {
                    username: 'Анна',
                    feedbackText: 'Большое спасибо! Работой монтажников очень довольна.' +
                    ' Все выполнено качественно и в срок. ' +
                    'Очень порядочные и внимательные. ' +
                    'Все сотрудники приветливы и отзывчивы. ' +
                    'Полностью удовлетворена работой компании. ',
                    userAvatar: Avatar,
                },
                {
                    username: 'Юлия',
                    feedbackText: 'Большое спасибо! Работой монтажников очень довольна.' +
                    ' Все выполнено качественно и в срок. ' +
                    'Очень порядочные и внимательные. ' +
                    'Все сотрудники приветливы и отзывчивы. ' +
                    'Полностью удовлетворена работой компании. ',
                    userAvatar: Avatar1,
                },
                {
                    username: 'Алена',
                    feedbackText: 'Большое спасибо! Работой монтажников очень довольна.' +
                    ' Все выполнено качественно и в срок. ' +
                    'Очень порядочные и внимательные. ' +
                    'Все сотрудники приветливы и отзывчивы. ' +
                    'Полностью удовлетворена работой компании. ',
                    userAvatar: Avatar,
                },
                {
                    username: 'Евдотья',
                    feedbackText: 'Большое спасибо! Работой монтажников очень довольна.' +
                    ' Все выполнено качественно и в срок. ' +
                    'Очень порядочные и внимательные. ' +
                    'Все сотрудники приветливы и отзывчивы. ' +
                    'Полностью удовлетворена работой компании. ',
                    userAvatar: Avatar1,
                },
                {
                    username: 'Карина',
                    feedbackText: 'Большое спасибо! Работой монтажников очень довольна.' +
                    ' Все выполнено качественно и в срок. ' +
                    'Очень порядочные и внимательные. ' +
                    'Все сотрудники приветливы и отзывчивы. ' +
                    'Полностью удовлетворена работой компании. ',
                    userAvatar: Avatar,
                },
                {
                    username: 'Укупник',
                    feedbackText: 'Большое спасибо! Работой монтажников очень довольна.' +
                    ' Все выполнено качественно и в срок. ' +
                    'Очень порядочные и внимательные. ' +
                    'Все сотрудники приветливы и отзывчивы. ' +
                    'Полностью удовлетворена работой компании. ',
                    userAvatar: Avatar1,
                },

            ]
        }
    }
    render() {
        return ( <div className={"FeedbackBlock"}>
                {
                    this.state.Feedback.map((Feedback, index) => {
                        return <FeedbackItem
                            key={index}
                            username={Feedback.username}
                            feedbackText={Feedback.feedbackText}
                            userAvatar={Feedback.userAvatar}
                        />
                    } ).slice(0, 2)
                }
            </div>

        )
    }
}

export default FeedbackBlock;