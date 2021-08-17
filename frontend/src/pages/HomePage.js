import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import FoodAPI from '../api/FoodAPI'
import FoodTable from '../components/FoodTable'
import NewNavBar from '../components/NewNavBar'

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
      let response = await FoodAPI.getFoodList(localStorage.getItem('token'))
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
    console.log('Prev',prevState)
    console.log('State',this.state)
    if (this.state.foodList.length == 0) {
      this.getAllFoodList()
    }

  }

  // render
  renderWelcome () {
    if(!this.context) {
      console.log("HERE")
      // return <Link to='/login'><Button>Login</Button></Link>
      return (
        <div>
          <NewNavBar />
          <ul>
            <FoodTable foodList={this.state.foodList}/>       
          </ul>
        </div>
      )
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
        <NewNavBar />
        <h2>Welcome to your food managing app {this.context.user.username}</h2>
        
        <ul>
          <FoodTable foodList={this.state.foodList}/>       
        </ul>
      </div>
    )

  }

  render() {
    return (
      <div>
        {/* <NewNavBar /> */}
        {/* <h1>My Home Page</h1> */}
        {/* <Link to='/food-search'>Search Food</Link> */}
        { this.state.foodList.length > 0 && this.renderWelcome() }
      </div>
    )
  }
}

HomePage.contextType = UserContext

export default HomePage
