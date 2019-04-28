import React from 'react';
import './ShortInfoBlock.css';

const ShortInfoBlock = (props) => {
        return (
            <div className={"ShortInfoBlock"}>
                <p>
                    <b>{props.firstWord}</b>{props.infoText}
                </p>
            </div>
        )
};

ShortInfoBlock.defaultProps = {
    firstWord: 'EASY WAY', //bold
    infoText: ' – это центр поддержки общественно полезных проектов, в фундаменте которого лежит уникальный\n' +
    '                    механизм – аукцион встреч. EASY WAY – это место, где Вы можете выставить встречу с собой на аукцион\n' +
    '                    или выиграть встречу со знаменитостью, специалистом в какой-либо сфере либо просто с человеком,\n' +
    '                    который Вам интересен. EASY WAY дает Вам возможность завести новых друзей и деловых партнёров,\n' +
    '                    получить новый незабываемый опыт и установить полезные контакты.',
};

export default ShortInfoBlock;