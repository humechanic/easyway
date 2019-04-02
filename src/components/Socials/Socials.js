import React, {Component} from 'react';
import './Socials.css';
import fb from './../../img/MainPage/fb.png';
import twitter from './../../img/MainPage/twitter.png';
import vk from './../../img/MainPage/vk.png';
import instagram from './../../img/MainPage/instagram.png';


class Socials extends Component {
    render () {
        return (
            <div className={"Socials"}>
                <a href={"#top"}><img src={vk} alt={'vk'}/></a>
                <a href={"#top"}><img src={fb} alt={'fb'}/></a>
                <a href={"#top"}><img src={instagram} alt={'inst'}/></a>
                <a href={"#top"}><img src={twitter} alt={'twi'}/></a>
            </div>

        )
    }
}
export default Socials;
