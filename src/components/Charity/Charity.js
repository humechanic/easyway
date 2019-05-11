import React  from 'react';
import "./Charity.css";
import CharityItem from './CharityItem';
import {connect} from 'react-redux';

function compareNumeric(a, b) {
    if (a.moneyAmount < b.moneyAmount) return 1;
    if (a.moneyAmount > b.moneyAmount) return -1;
}

const Charity = (props) => {
    props.charityList.sort(compareNumeric);
    return (
        <div className={"CharityList"}>
            <p className={"CharityTitle"}>Больше всего пожертвовали</p>
            {
                props.charityList.map((CharityList, index) => {
                    return <CharityItem
                        key={index}
                        moneyAmount={CharityList.moneyAmount}
                        type={CharityList.type}
                        logo={CharityList.logo}
                    />
                })
            }
        </div>
    )
};

function mapStateToProps(state) {
    return {
        charityList: state.homePage.CharityList
    }

}

export default connect(mapStateToProps)(Charity);