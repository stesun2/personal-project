import React, { Component } from 'react'
import FoodAPI from '../api/FoodAPI'
import UserContext from '../contexts/UserContext'

class FoodPage extends Component {
  state = {
    foodList: null
  }

  // helper methods
  async getFoodList() {
    try {
      let foodListId = this.props.match.params.foodListId
      let token = this.context
        ? this.context.token
        : null
      let foodListData = await FoodAPI.getFoodListById(foodListId, token)
      if (foodListData) {
        this.setState({ foodList: foodListData })
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  // lifecycle
  componentDidMount() {
    this.getFoodList()

  }

  // render
  renderFoodList() {
    if (!this.state.foodList) {
      return <p>No Food Item Found</p>
    }
    return (
      <div>
        {/* <h1>User: {this.state.foodList.user}</h1> */}
        <h1>name: {this.state.foodList.name}</h1>
        <h1>storage: {this.state.foodList.storage}</h1>
        <h1>sell by: {this.state.foodList.sell_by_date}</h1>
      </div>
    )

  }

  render() {    
    return (
      <div>
        <h1> Food Page: { this.props.match.params.foodListId } </h1>
        { this.renderFoodList() }
      </div>
    )
  }
}

FoodPage.contextType = UserContext

export default FoodPage
