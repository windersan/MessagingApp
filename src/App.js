import React, { Component } from 'react';
import UserList from './Components/UserList.js';
import MessageList from './Components/MessageList.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import MediaQuery from 'react-responsive';


// Note the use of media queries.  One version of the application will be loaded for mobile,
// which is assumed here to be any device of 800px or less.  The other will be loaded for
// all larger devices.

const App = () => (

  <div>

    <MediaQuery query="(max-device-width: 800px)">
      <Router>
        <Switch>   
          <Route exact path='/' component={UserList}/>
          <Route path="/:id" component={MessageList}/> 
        </Switch>
      </Router>
    </MediaQuery>

    <MediaQuery query="(min-device-width: 801px)">
      <Router>
        <div>
          <div style={{ float:'left', listStyle: 'none'}}>
          <UserList className="UserList"></UserList>
          </div>
          <div style={{ float:'right'}}>
          <Route path="/:id" component={MessageList}/>
          </div>
        </div>
      </Router>
    </MediaQuery>

  </div>

)

export default App;
