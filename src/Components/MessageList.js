import React, { Component } from 'react';
import axios from 'axios';
import Message from './Message';
import MessageForm from './MessageForm';

//Renders all messages associated with a single user.
class MessageList extends React.Component {

    constructor(){
        super();

        this.state = {
            messages: []
        };
    }

 _getMessages(){
        return this.state.messages.map((message) => {
            return( 
                <Message
                    text={message.text}    
                />   
            );
        }); 
    }

 render() {
     //User ID prop shortened below
     const {id} = this.props.match.params;

    const messages= this._getMessages();

    return(      
        <div className="message-box" >
            <h2 style={{width: '35%', 
            padding:'3%',margin: '5px'}} >ID: {id}</h2>
            <div className="message-list">
                {messages}
            </div>
            <MessageForm addMessage={this._addMessage.bind(this)}/>
        </div>
    );  
 }

 //This function is for when a new message is added by the user
 _addMessage(text){
     const message = {
        text
     };
    this.setState({messages: this.state.messages.concat([message])});
 }

 componentWillMount(){

    //Hard-code the API values for now until the back-end is available
    this.setState({messages: [{"date": "2017-01-01 10:10", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "sender_user": 5},
    {"date": "2017-01-01 10:11", "text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "sender_user": 1}]});

    /*The AJAX below can be used later to get the values from an API, for example at
    ~/GET/messages?id=USER_ID     The user ID is available for access in the props.

    axios.get('URL')
    .then((result)=> {
      this.setState({
        messages: result.data.messages
      });
    })*/
 }
}

export default MessageList;