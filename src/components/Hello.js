import React from 'react'
import Login from './Login/Login';

const Hello = (props) => {
    return (
        <React.Fragment>
            <div style={{ width: "30%", margin: 'auto', marginTop: '5%' }}>
                <Login ></Login>
            </div>
        </React.Fragment>
        );
}

export default Hello;   