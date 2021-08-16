import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
// import FoodAPI from '../api/FoodAPI'
// import { useParams } from 'react-router-dom'

class SearchPage extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      query: '',
      results: {},
      loading: false,
      message: ''
    }
    this.cancel = ''
  }
  
  fetchSearchResults = ( query ) => {
    const apiURL = `https://api.edamam.com/api/food-database/v2/parser?app_id=2583ee8d&app_key=c375c3f7ae01763b44c09337fe634b56&ingr=${query}`
    if (this.cancel) {
      this.cancel.cancel();
    } 
    this.cancel = axios.CancelToken.source()
    axios.get(apiURL, {
      cancelToken: this.cancel.token
    })
      .then(res => {
        const resultNotFoundMsg = !res.data.hints.length
                                ? 'No more search results. Please try a new search'
                                : ''
        this.setState({
          results: res.data.hints,
          message: resultNotFoundMsg,
          loading: false 
        })
      })
      .catch ( error => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: 'Failed to Fetch Data'
          })
        }
           
      })
  }

  handleOnInputChange = ( event ) => {
    const query = event.target.value
    this.setState({ query:query, loading: true, message: '' }, () => {
      this.fetchSearchResults( query )

    })

  };

  // async componentDidMount () {
  //   const apiURL = 'https://api.edamam.com/api/food-database/v2/parser?app_id=2583ee8d&app_key=c375c3f7ae01763b44c09337fe634b56&ingr='
  //   const response = await fetch(apiURL)
  //   const data = await response.json()
  //   this.setState({text: data.results[0], loading: false})
  // }

  renderSearchResults = () => {
    const { results } = this.state
    if (Object.keys(results).length && results.length) {
      return(
        <div className='results-container'>
          { results.map( result => {
            return (
              <a key={result.foodId} href={result.image} className='result-item'>
                <h6 className='image-username'>{result.username}</h6>
                <div className='image-wrapper'>
                  <img className='image' src={ result.image } alt={`${result.username} `} />

                </div>

              </a>
            )
          })}

        </div>
      )
    }
  }

  render() {
    const { query } = this.state
    return (
      <div className='container'>
        <h1 className='heading'> Search Food Database Page </h1>
        <label className='search-label' htmlFor='search-input'>
          <input type='text' name='query' value={query} id='search-input' placeholder='Look up food' onChange={this.handleOnInputChange} />
            <br />
            <Button type='submit'>Search</Button>

        </label>
        {/* Results */}
          { this.renderSearchResults() }
      </div>
    )
  }
}

export default SearchPage
