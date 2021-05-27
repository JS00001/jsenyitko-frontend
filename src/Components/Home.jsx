import React from 'react';
import "../Styles/LightTheme/Home.light.css";
import config from "../Util/config";

export default class Home extends React.Component {
    render() {
        return(
            <div className="center">
                <a href={config.dashboardRedirect}><button className="button">Login with Discord</button></a>
            </div>
        )
    }
}
