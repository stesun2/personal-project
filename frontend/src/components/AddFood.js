import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class AddFood extends Component {
  saveFood = (event) => {
    event.preventDefault()
    console.log(event.target.sellBy.value)
    console.log(event.target.storage.value)
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
