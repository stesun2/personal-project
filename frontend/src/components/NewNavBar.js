import React from 'react';
import { Button } from 'react-bootstrap';
// import SearchPage from './pages/SearchPage.js'


function NewNavBar() {
  return (
    <div className='Navbar'>
      <div className='leftside'>
        <div className='links'>
          <a href='/'> Home </a>
          <a> About </a>
          <a> Feedback </a>
          <a> Contact </a>
        </div>
      </div>
      <div className='rightside'>
        <Button exact href='/login'> Login </Button>
        <Button exact href='/food-search'> Food Search </Button>
      </div>
    </div>
  );
};

export default NewNavBar;