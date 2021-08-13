import React, { Component } from 'react'

class SearchPage extends Component {
  render() {
    return (
      <div>
        <h1> Search Page </h1>
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

export default SearchPage
