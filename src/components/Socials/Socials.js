import React, {Component} from 'react';
import './Socials.css';
import fb from './../../img/fb.png'
import twitter from './../../img/twitter.png'
import vk from './../../img/vk.png'
import instagram from './../../img/instagram.png'


class Socials extends Component {
    render () {
        return (
            <div className={"Socials"}>
                <a href={"#"}><img src={vk}/></a>
                <a href={"#"}><img src={fb}/></a>
                <a href={"#"}><img src={instagram}/></a>
                <a href={"#"}><img src={twitter}/></a>
            </div>

        )
    }
}
export default Socials;
