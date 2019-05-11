import React from 'react';
import './NewsBlock.css';
import NewsBlockItem from './NewsBlockItem';
import { connect } from 'react-redux';

const NewsBlock = (props) => {
        return (
            <div className={"NewsBlock"}>
                {
                    props.news.map((News, index) => {
                        return <NewsBlockItem
                            key={index + [News.title]}
                            title={News.title}
                            background={News.background}
                        />
                    }).slice(0, 3)
                }
            </div>
        )
};

function mapStateToProps(state) {
    return {
     news: state.AllNews.News
    }
}

export default connect(mapStateToProps)(NewsBlock);