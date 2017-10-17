import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class User extends React.Component {

 render() {
    return( 
        <li>
            <Link style={{width: '40%', float: 'left', backgroundColor:'#c0fff4',
                padding:'3%',margin: '40px',border: '5px solid pink'}} 
                to={this.props.id.toString()}>
                {this.props.name} ({this.props.total})
            </Link>
        </li>
    );
 }
}

export default User;