import React from 'react';
import Content from "../../content/Content";
import { Route, Link, withRouter } from 'react-router-dom';
import UserPage from "./UserPage";

const TestPage = (props) => {
    return (
        <Content>
            <div style={{
                margin: "10px auto 10px auto",
                backgroundColor: "#dcf6fe",
            }}>
                &nbsp;
                &nbsp;
                <Link to={`${props.match.url}/company`}>Организация</Link>
                &nbsp;
                &nbsp;
                &nbsp;
                <Link to={`${props.match.url}/client`}>Физ. лицо</Link>
                &nbsp;
                &nbsp;
            </div>
            <Route path={`${props.match.url}/company`}
                   render={() => <UserPage company={true}/>}/>
            <Route path={`${props.match.url}/client`}
                   render={() => <UserPage />}/>
        </Content>
    )
};
export default withRouter(TestPage);