import React, {Component} from 'react';
import Logo, from '../../img/Logo.png'

class LogoIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TextColor: [
                {
                    Header: '#ffffff;',
                },
                {
                    Footer: '#000000;',
                }
            ]
        }
    }


render () {
    return (
        <div>
            <img src={Logo} alt={Easyway}>Easy Way</br>Благотворительный каталог<img/>
        </div>
    )
  }
};

export default LogoIcon;