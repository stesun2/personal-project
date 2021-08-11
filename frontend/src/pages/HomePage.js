import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
 
class HomePage extends Component {
  render() {
    return (
      <div className='container'>
        <div id='foodlist-container'>
          <div id="form-wrapper">
              <form id="form">
                  <div className="flex-wrapper">
                       <div style={{flex: 6}}>
                          <input className="form-control" id="title" type="text" name="title"placeholder="Add task.." />
                       </div>
                        <div style={{flex: 1}}>
                          <input id="submit" className="btn btn-warning" type="submit" name="Add" />
                        </div>
                    </div>
              </form>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
