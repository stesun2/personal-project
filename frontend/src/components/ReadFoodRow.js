import React from 'react';
import { Button } from 'react-bootstrap';
import '../App.css'

const ReadFoodRow = ({ food, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{food.name}</td>
      <td>{food.storage}</td>
      <td>{food.sell_by_date}</td>
      <td>
        <Button type='button' onClick={(event)=> handleEditClick(event, food)}>Edit</Button>
        <Button type="button" onClick={() => handleDeleteClick(food.id)}>Delete</Button>
      </td>
    </tr>
  );
};

export default ReadFoodRow;