import React from 'react';
import '../Scss/Error404.scss';

export default class Error404 extends React.Component {
    render() {
        return(
            <>
                <h1>404</h1>
                <h3>Could not find the page you are looking for.</h3>
            </>
        )
    }
}