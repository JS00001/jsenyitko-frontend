import React from 'react';
import "../Styles/DarkTheme/Home.dark.css";
import config from "../Util/config";

export default class Home extends React.Component {
    render() {
        return(
            <a href={config.dashboardRedirect}><button className="button">Login with Discord</button></a>
        )
    }
}
