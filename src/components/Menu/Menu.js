import React, {Component} from 'react'
import MenuItem from './MenuItem'
import classes from './Menu.module.css'

class Menu extends Component {
    constructor(props) {
        super(props);

        this.type = {
                type: [props.type]
                    };

        this.state = {
            MenuList: [
                {
                    title: 'О нас',
                    path: 'router',
                },
                {
                    title: 'Стать партнером',
                    path: 'router',
                },
                {
                    title: 'Контакты',
                    path: 'router',
                }
            ]
        }

    }
    render () {
        return (
            <ul className={classes.Menu}>
                {
                    this.state.MenuList.map((MenuList, index) => {
                        return <MenuItem key={index}
                                         title={MenuList.title}
                                         type={this.props.type}
                        />
                    })
                }
            </ul>

        );
    }
}
export default Menu;