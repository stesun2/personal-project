import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, } from "react-router-dom";
// import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage.js'
import FoodPage from './pages/FoodPage.js'
import SearchPage from './pages/SearchPage.js'
import LoginPage from './pages/LoginPage.js'
import UserContext from './contexts/UserContext';

// Function method
// function App() {
//   return (
//     <div className="App">
//       <h1>Test</h1>
//     </div>
//   );
// }

class App extends Component {
  state = {
    user: null
  }

  // helper
  updateUser = (newUserData) => {
    console.log(newUserData)
    this.setState({user: newUserData })
  }

  // render
  renderLoginPage = (routeProps) => {
    return <LoginPage {...routeProps} completeLogin={this.updateUser} />
  }

  render(){
    return(
      <div className='App'>
        <UserContext.Provider value={this.state.user}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" render={this.renderLoginPage} />
              <Route exact path="/food-list/:foodListId" component={FoodPage} />
              <Route exact path="/food-search" component={SearchPage} />
            </Switch>
          </BrowserRouter>
        </UserContext.Provider>
      </div>

    )
  }
}
export default App;
