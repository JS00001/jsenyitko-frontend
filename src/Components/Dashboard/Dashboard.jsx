import { CircularProgress } from '@material-ui/core';
import React from 'react';
import "../../Scss/Dashboard.css"
import {withSnackbar} from 'notistack';
import {getUser, whitelist} from '../../Util/requests';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {        
            ign: null,
            auth: null,
            events: [],
            username: null,
            lastChangedUsername: null,
            value: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    async componentDidMount() {
        try {
            const data = await getUser();
            const {ign, lastChangedUsername, username, events, _id} = data.data;
            this.setState({ign, lastChangedUsername, username, events: events ? events.reverse(): [], auth: _id});
        } catch (error) {
            console.log(error)
            return (window.location = "https://jsenyitko.tech/auth/discord");
        }
    }

    async handleChange(event) {
        this.setState({value: event.target.value});
    }

    async handleSubmit() {
        try {
            const {auth, value} = this.state;
            const data = await whitelist(auth, value);
            this.props.enqueueSnackbar("Changed username", {variant: "success"})
        } catch (error) {
            this.props.enqueueSnackbar("An error occured", {variant: "error"})
        }
    }

    render() {
        const {ign, lastChangedUsername, username, events} = this.state;
        if(!ign) return <CircularProgress className="spinner"/>

        return(
        <div className="App">
            <nav>
                <ul className="flex">
                    <li>
                        <a href="#" className="big_ash_text" href="https://jsenyitko.tech/dashboard">
                        Manage
                        </a>
                    </li>
                    <li>
                        <a href="#" className="big_ash_text" href="https://discord.gg/Zt5gm4McgY">
                        Discord
                        </a>
                    </li>
                    <li>
                        <a href="#" className="big_ash_text" href="https://jsenyitko.tech/auth/logout">
                        Logout
                        </a>
                    </li>
                </ul>
            </nav>

            <main>
                <div className="lhs card">
                    <h2 className="title big_ash_text">Manage Whitelist</h2>
                    <input type="text" placeholder={`New IGN (${ign})`} onChange={this.handleChange} />
                    <div>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
                <div className="rhs card">
                    <h2 className="title big_ash_text">Your logs</h2>
                    <div className="logs">
                        {events.map((log) => {
                        return (
                            <div className="each_log">
                            <p className={`${log.status === "death" ? "red" : "green"} status`}>
                                {log.status}
                            </p>
                            <p className="detail">{log.detail}</p>
                            </div>
                        );
                        })}
                    </div>
                </div>
            </main>
        </div>
        )
    }
}

export default withSnackbar(Dashboard);