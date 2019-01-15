import React, {Component} from 'react'
import classes from './Menu.module.css'

class Menu extends Component {
    render() {
        return (
            <div className={classes.Menu}>
                <ul><li>{ this.props.name }</li></ul>
            </div>
    )

    }
}
export default Menu;