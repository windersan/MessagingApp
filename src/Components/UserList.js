import React, { Component } from 'react';
import axios from 'axios';
import User from './User';


//Renders all users.
class UserList extends React.Component {

    constructor(){
        super();

        this.state = {
            users: []
        };
    }

 render() {
    return this.state.users.map((user) => {
        return( 
            <User
                name={user.name}    
                total={user.total}
                id={user.id} 
            />   
        );
    });   
 }

 componentWillMount(){

    //Hard-code the API values for now until the back-end is available
    this.setState({users: [{"name": "Edward Lathem", "total": 10, "id": 5},
    {"name": "Lester Bohannon", "total": 5, "id": 22},
    {"name": "Jacqueline T. Elias", "total": 11, "id": 34},
    {"name": "Julie Gamez", "total": 33, "id": 103}]});


    //The AJAX below can be used later to get the values from an API
   /* axios.get('URL')
    .then((result)=> {
      this.setState({
        users: result.data.users
      });
    })*/
 }

}

export default UserList;


