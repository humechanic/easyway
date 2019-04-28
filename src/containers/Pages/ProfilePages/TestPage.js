import React from 'react';
import OrganizationProfile from "./OrganizationProfile";
import Content from "../../content/Content";
import { Route, Link } from 'react-router-dom';
import IndividualProfile from "./IndividualProfile";

const TestPage = ({ match }) => {
        return (
            <Content>
                <div style={{
                    margin: "10px auto 10px auto",
                    backgroundColor: "#dcf6fe",
                }}>
                    &nbsp;
                    &nbsp;
                    <Link to={`${match.url}/company`}>Организация</Link>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Link to ={`${match.url}/client`}>Физ. лицо</Link>
                    &nbsp;
                    &nbsp;
                </div>
                <Route path={`${match.url}/company`} component={OrganizationProfile}/>
                <Route path={`${match.url}/client`} component={IndividualProfile}/>
            </Content>

        )
};
export default TestPage;