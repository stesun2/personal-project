import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import FoodAPI from '../api/FoodAPI'
import FoodTable from '../components/FoodTable'

// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// const mockData = '../mock-data.json'
 
class HomePage extends Component {
  state = {
    foodList: []
  }

  // helper methods
  getAllFoodList = async () => {
    try {
      console.log(this.context)
      let response = await FoodAPI.getFoodList(this.context.token)
      let data = await response.json()
      console.log(data)
      this.setState({foodList: data})
    

    }
    catch {
    }
  }

  // life cycle
  componentDidMount () {
    this.getAllFoodList()
    

  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.foodList.length == 0) {
      this.getAllFoodList()
    }

  }

  // render
  renderWelcome () {
    if(!this.context) {
      return <Link to='/login'><Button>Login</Button></Link>
    }

    if (!this.state.foodList) {
      return 'No food items were found'
    }

    let foodListElement = this.state.foodList.map((foodList, index) => {
      return <li key={`food-list-${index}`}>
        <Link to={`/food-list/${foodList.id}`}> {foodList.name} </Link> 
        </li>
    })

    return (
      <div>
        <h2>Welcome to your food managing app {this.context.user.username}</h2>
        
        <h2>Your Food List:</h2>
        <ul>
          { foodListElement }
          <FoodTable foodList={this.state.foodList}/>
       
        </ul>
      </div>
    )

  }

  render() {
    return (
      <div className='center'>
        <h1>My Home Page</h1>
        <Link to='/food-search'>Search Food</Link>
        { this.renderWelcome() }
      </div>
    )
  }
}

HomePage.contextType = UserContext

export default HomePage
