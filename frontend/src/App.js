import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage.js'
import FoodPage from './pages/FoodPage.js'
import SearchPage from './pages/SearchPage.js'

// Function method
// function App() {
//   return (
//     <div className="App">
//       <h1>Test</h1>
//     </div>
//   );
// }

class App extends React.Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/food" component={HomePage} />
            <Route exact path="/food/food-list" component={FoodPage} />
            <Route exact path="/food/food-search" component={SearchPage} />
          </div>
        </BrowserRouter>
      </div>

    )
  }
}
export default App;
