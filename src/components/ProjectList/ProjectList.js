import React, {Component} from 'react';
import './ProjectList.css';
import ProjectListItem from './ProjectListItem';
import ProjectImage from './../../img/UserProfile/CharityProject1.png';
import ProjectImage1 from './../../img/UserProfile/CharityProject2.png';
import ProjectImage2 from './../../img/UserProfile/HappyKids.png'

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Projects: [
                {
                    title: 'Оплата расходов на оказание бесплатной паллиативной медицинской помщи детям с тяжелыми заболеваниями',
                    info: 'Белорусский детский хоспис',
                    ProjectImage: ProjectImage,
                },
                {
                    title: 'Оплата расходов на оказание бесплатной паллиативной медицинской помщи детям с тяжелыми заболеваниями',
                    info: 'Белорусский детский хоспис',
                    ProjectImage: ProjectImage1,
                },
                {
                    title: 'Оплата расходов на оказание бесплатной паллиативной медицинской помщи детям с тяжелыми заболеваниями',
                    info: 'Белорусский детский хоспис',
                    ProjectImage: ProjectImage2,
                },
                {
                    title: 'Оплата расходов на оказание бесплатной паллиативной медицинской помщи детям с тяжелыми заболеваниями',
                    info: 'Белорусский детский хоспис',
                    ProjectImage: ProjectImage1,
                },
                {
                    title: 'Оплата расходов на оказание бесплатной паллиативной медицинской помщи детям с тяжелыми заболеваниями',
                    info: 'Белорусский детский хоспис',
                    ProjectImage: ProjectImage,
                },
            ]
        }
    }

    render() {
        return (

            <div className={"ProjectList"}>
                {
                    this.state.Projects.map((Projects, index) => {
                        return <ProjectListItem
                            key={index}
                            title={Projects.title}
                            projectImage={Projects.ProjectImage}
                            info={Projects.info}
                        />
                    }).slice(0, 3)
                }
            </div>
        )
    }

}

export default ProjectList;