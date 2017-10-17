import React, { Component } from 'react';

//An individual message.
class Message extends React.Component {
 
 render() {
     
 return( 
     <p style={{width: '40%', backgroundColor:'#c0fff4',
            padding:'3%',margin: '5px',border: '5px solid pink'}}>
            {this.props.text}</p>
  );
 }
}

export default Message;