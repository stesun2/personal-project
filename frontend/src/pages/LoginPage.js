import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import FoodAPI from '../api/FoodAPI'

class LoginPage extends Component {

  // helper
  handleLogin = async (e) => {
    e.preventDefault()

    let username = e.target.username.value
    console.log(username)
    let password = e.target.password.value

    let credentials = {
      username: username,
      password: password
    }

    try {
      let data = await FoodAPI.doLogin(credentials)
      console.log(data) 
      localStorage.setItem('token', data.token)
      this.props.completeLogin(data)
      this.props.history.push('/')

    }
    catch {

    }

  }

  render() {
    return (
      <div className='center'>
        <h1>Login Page</h1>
        <Form onSubmit={this.handleLogin}>
          <label>Username:</label>
          <input name='username' />
          <br />
          <label>Password:</label>
          <input name='password' type='password'/>
          <br />
          <Button type='submit'>Login</Button>
        </Form>
      </div>
    )
  }
}

export default LoginPage
