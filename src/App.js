import React from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom'
//引入组件
import Login from './views/login/Index';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <HashRouter>
        <Switch>
           <Route component={Login} path="/"/>
          <Route></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default App;
