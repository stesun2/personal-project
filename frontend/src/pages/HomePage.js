import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
 
class HomePage extends Component {
  render() {
    return (
      <div className='center'>
        <h1>My Home Page</h1>
        <p>This is the HomePage</p>

        <Link to='/login'>
          <Button>Login</Button>
        </Link> 
      </div>
    )
  }
}
export default HomePage
