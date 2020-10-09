import React, { Component} from 'react';
import './App.css';
import { Button, message} from 'antd'
import { BrowserRouter, HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
class App extends Component {
  handleClick = () => {
    message.success('成功了。。。。')
  }
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Redirect from="/" to="/login" />
        </Switch>
      </HashRouter>
    );
  }
  
}

export default App;
