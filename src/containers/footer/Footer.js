import React, {Component} from 'react';
import './Footer.css';
import Menu from "../../components/Menu/Menu";
import LogoIcon from "../../components/Logo/LogoIcon";
import Socials from "../../components/Socials/Socials";
import LogoFooter from '../../img/Logo1.png';
import InfoBlock from "../../components/InfoBlock/InfoBlock";

class Footer extends Component{
    render() {
        return (

                <>

                <div className={"Footer"}>
                    <LogoIcon
                        textColor={'black'}
                        logo={LogoFooter}/>

                    <Menu
                        type={'Footer'}/>

                    <Socials />

                </div>

                <InfoBlock
                        firstWord = {''}
                        infoText = {'© 2017 ООО «Фонд благотворительной помощи» УНП 12345687'}/>

                </>
        )
    }
}

export default Footer;