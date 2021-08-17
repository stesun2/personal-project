import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import FoodAPI from '../api/FoodAPI'
import UserContext from '../contexts/UserContext'

class AddFood extends Component {
  saveFood = async (event) => {
    event.preventDefault()
    console.log(event.target.sellBy.value)
    console.log(event.target.storage.value)
    console.log(this.context)
    let foodObj = {
      "name": this.props.label,
      "storage": event.target.storage.value,
      "sell_by_date": event.target.sellBy.value

    }
    let response = await FoodAPI.addFood(this.context.token, foodObj)
    let data = await response.json()
    console.log(data)
    this.props.handleModalClose()

  }

  render() {
    return (
      <div>
        <Form onSubmit={this.saveFood}>
          <h1>{this.props.label}</h1>
          <label for='sellBy'>Sell By:</label>
          <input type='date' id='sellBy' name='sellBy'></input>
            <select name='storage'>          
              <option value="fridge">Fridge</option>
              <option value="freezer">Freezer</option>
              <option value="pantry">Pantry</option>
            </select>
          <Button type='submit'> Save Food </Button>

        </Form>
        
      </div>
    )
  }
}

AddFood.contextType = UserContext

export default AddFood