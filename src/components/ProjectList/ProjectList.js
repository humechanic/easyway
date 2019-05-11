import React from 'react';
import './ProjectList.css';
import ProjectListItem from './ProjectListItem';
import {connect} from "react-redux";

const ProjectList = (props) => {
    return (
        <div className={"ProjectList"}>
            {
                props.projects.map((Projects, index) => {
                    return <ProjectListItem
                        key={index + [Projects.title]}
                        title={Projects.title}
                        projectImage={Projects.ProjectImage}
                        info={Projects.info}
                    />
                }).slice(0, 3)
            }
        </div>
    )
};

function mapStateToProps(state) {
    return {
        projects: state.AllProjects.projects,
    }
}

export default connect(mapStateToProps)(ProjectList);