import React, { useState, Fragment } from 'react'
import { nanoid } from "nanoid";
// import axios from 'axios'
import { Table } from 'react-bootstrap'
// import data from '../mock-data.json'
import ReadFoodRow from './ReadFoodRow'
import EditFoodRow from './EditFoodRow'


const FoodTable = ({foodList}) => {
  console.log(foodList)
  // const [food, setFood] = useState({ foodList: [] })
  // const [foods, setFoods] = useState(data)
  const [addFormData, setAddFormData] = useState({
    name: '',
    storage: '',
    sellBy: '',
  });

  const [editFormData, setEditFormData] = useState({
    name: '',
    storage: '',
    sellBy: '',
  });

  const [editFoodId, setEditFoodId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      id: nanoid(),
      name: addFormData.name,
      storage: addFormData.storage,
      sellBy: addFormData.sellBy,
    };

    const newFoods = [...foodList, newFood];
    // setFoods(newFoods);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedFood = {
      id: editFoodId,
      name: addFormData.name,
      storage: addFormData.storage,
      sellBy: addFormData.sellBy,
    };

    const newFoods = [...foodList];

    const index = foodList.findIndex((food) => food.id === editFoodId);

    newFoods[index] = editedFood;

    // setFoods(newFoods);
    setEditFoodId(null);
  };

  const handleEditClick = (event, food) => {
    event.preventDefault();
    setEditFoodId(food.id);

    const formValues = {
      name: food.name,
      storage: food.storage,
      sellBy: food.sellBy,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditFoodId(null);
  };

  const handleDeleteClick = (foodId) => {
    const newFoods = [...foodList];

    const index = foodList.findIndex((food) => food.id === foodId);

    newFoods.splice(index, 1);

    // setFoods(newFoods);
  };

  return (
    <div className='app-container'>
      <form onSubmit={handleEditFormSubmit}>
        <h2>Table</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Storage</th> 
              <th>Sell By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foodList.map((food) => (
                <Fragment>
                  {editFoodId === food.id ? (
                    <EditFoodRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadFoodRow
                      food={food}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
          </tbody>
        </Table>
      </form>
      <h2>Add a Food</h2>
      <form onSubmit={handleAddFormSubmit}>
      <input
          type="text"
          required="required"
          placeholder="Enter a food item"
          name="name"
          value={editFormData.name}
          onChange={handleAddFormChange}
      />
        <select
          required="required"
          placeholder="Enter storage type"
          name="storage"
          value={editFormData.storage}
          onChange={handleAddFormChange}
        >
              <option value="fridge">Fridge</option>
              <option value="freezer">Freezer</option>
              <option value="pantry">Pantry</option>
        </select>
        <input
          type="date"
          required="required"
          placeholder="Enter a sell by date"
          name="sellBy"
          value={editFormData.sell_by_date}
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
 
export default FoodTable
