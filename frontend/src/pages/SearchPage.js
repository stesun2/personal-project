import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import axios from 'axios'
import AddFood from '../components/AddFood';

// import FoodAPI from '../api/FoodAPI'
// import { useParams } from 'react-router-dom'

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: {},
      loading: false,
      message: '',
      showModal: false,
      selectFood: null,
    }
    this.cancel = ''
  }
  
  fetchSearchResults = (query) => {
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

  handleOnInputChange = (event) => {
    const query = event.target.value
    if (!query) {
      this.setState({ query: query, results: {}, message: '' })
    }
    else {
      this.setState({ query: query, loading: true, message: '' }, () => {
        this.fetchSearchResults(query)
  
      })
    }
  };

  // async componentDidMount () {
  //   const apiURL = 'https://api.edamam.com/api/food-database/v2/parser?app_id=2583ee8d&app_key=c375c3f7ae01763b44c09337fe634b56&ingr='
  //   const response = await fetch(apiURL)
  //   const data = await response.json()
  //   this.setState({text: data.results[0], loading: false})
  // }

  handleFoodClick = (label) => {
    console.log(label)
    this.setState({
      selectFood: label,
      showModal: true,
    })
  }

  handleModalClose = () => {
    this.setState({
      selectFood: null,
      showModal: false,
    })
  }

  renderSearchResults = () => {
    const { results } = this.state
    if (Object.keys(results).length && results.length) {
      return(
        <div className='results-container'>
          { results.map( (result, id) => {
            return (
              <div key={id} className='result-item'>
                <h2 className='image-label' onClick={ () => this.handleFoodClick(result.food.label)}>{result.food.label}</h2>
                <div className='image-wrapper'>
                  <img className='image' src={ result.food.image } alt={`${result.label} `} />
                </div>

              </div>
            )
          })}

        </div>
      )
    }
  }
  render() {
    const { query } = this.state
    console.log(this.state)
    return (
      <div className='container'>
        { this.state.showModal 
          && 
          <Modal.Dialog>

            <Modal.Body>
              <AddFood handleModalClose={ this.handleModalClose } label={ this.state.selectFood }/>
            </Modal.Body>

        
          </Modal.Dialog> }

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
