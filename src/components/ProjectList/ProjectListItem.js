import React from 'react';
import './ProjectListItem.css';
import Button from "../Button/Button";

const ProjectListItem = (props) => {
    return (
            <div className={"ProjectListItem"}>
                <img src={props.projectImage} alt={'project'}/>
                <p className={"ProjectInfo"}>{props.info}</p>
                <p className={"ProjectName"}>{props.title}</p>
                    <Button
                        buttonType={'blue'}
                        titleStyle={'textBlack'}
                    >Подробнее</Button>
            </div>
    )
};

export default ProjectListItem;