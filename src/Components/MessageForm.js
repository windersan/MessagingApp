import React, { Component } from 'react';
import axios from 'axios';
import Message from './Message';

//For the user to enter new messages.
class MessageForm extends React.Component {

 render() {
 return( 
    <form style={{width: '40%', backgroundColor:'#c0fff4',
            padding:'3%',margin: '5px',border: '5px solid pink'}} 
            className="message-form" onSubmit={this._handleSubmit.bind(this)}>
        <div className="message-form-fields">
            <textarea placeholder="Message:" ref={(textarea)=>this._text=textarea}></textarea>          
        </div>
        <br/>
        <div className="message-form-actions">
            <button style={{backgroundColor:'pink'}}type="submit">
                Send message
            </button>
        </div>
    </form>
  );
 }

 //When the user clicks the button 'Send message' this function is called.
 _handleSubmit(event){
     event.preventDefault();

     let text=this._text;

     //Add the message to the MessageList state so that it will render along with the other messages.
     this.props.addMessage(text.value);
 }
}

export default MessageForm;