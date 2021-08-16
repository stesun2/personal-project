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
  getFoodList = async () => {
    try {
      let token = this.context
        ? this.context.token
        : null
      if (token) {
        let foodListData = await FoodAPI.getFoodList(token)
        this.setState({ foodList: foodListData })
      }
    }
    catch {
    }
  }

  // life cycle
  componentDidMount () {
    this.getFoodList()

  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.foodList !== this.state.foodList)
      this.getFoodList()

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
          <FoodTable />
          {/* <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Storage Location</th>
                <th>Sell By Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Example:Eggs</td>
                <td>Fridge</td>
                <td>8/18/2021</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ice cream</td>
                <td>Freezer</td>
                <td>9/25/2021</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Cereal</td>
                <td>Pantry</td>
                <td>9/14/2021</td>
              </tr>
            </tbody>
          </Table> */}
        </ul>
      </div>
    )

  }

  render() {
    return (
      <div className='center'>
        <h1>My Home Page</h1>
        { this.renderWelcome() }
      </div>
    )
  }
}

HomePage.contextType = UserContext

export default HomePage
