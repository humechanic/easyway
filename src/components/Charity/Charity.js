import React, {Component} from 'react';
import "./Charity.css";
import CharityItem from './CharityItem';
import logoBlrKCompany from '../../img/logoBlrKCompany.png';
import logoGasProm from '../../img/logoGasProm.png';
import logoBlrBank from '../../img/logoBlrBank.png'

function compareNumeric(a, b) {
    if (a.moneyAmount < b.moneyAmount) return 1;
    if (a.moneyAmount > b.moneyAmount) return -1;
}

class Charity extends Component {
    constructor(props) {
        super(props);

      this.Title =

              {
                title: 'Больше всего пожертвовали'
              };

      this.CharityList = [

            {
                type: 'red',
                moneyAmount: '13000',
                path: 'router',
                logo: logoBlrKCompany,
            },

            {
                type: 'blue',
                moneyAmount: '15000',
                path: 'router',
                logo: logoGasProm,
            },

            {
                type: 'yellow',
                moneyAmount: '10000',
                path: 'router',
                logo: logoBlrBank,
            },

        ];

this.CharityList.sort(compareNumeric);

    }

    render() {

        return (
            <div className={"CharityList"}>
            {
                <p className={"title"}>{this.Title.title}</p>
            }
            {
                    this.CharityList.map((CharityList, index) => {
                        return  <CharityItem
                                key={index}
                                moneyAmount={CharityList.moneyAmount}
                                type={CharityList.type}
                                logo={CharityList.logo}
                                />
                    })
            }
            </div>
        )
    }
}

export default Charity;