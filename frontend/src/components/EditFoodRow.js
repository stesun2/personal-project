import React from 'react';
import { Button } from 'react-bootstrap';

const EditFoodRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => { 
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a food item"
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <select
          required="required"
          placeholder="Enter storage type"
          name="storage"
          value={editFormData.storage}
          onChange={handleEditFormChange}
        >
              <option value="fridge">Fridge</option>
              <option value="freezer">Freezer</option>
              <option value="pantry">Pantry</option>
        </select>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter a sell by date"
          name="sellBy"
          value={editFormData.sellBy}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <Button type="submit">Save</Button>
        <Button type="button" onClick={handleCancelClick}>
          Cancel
        </Button>
      </td>
    </tr>
  );
};

export default EditFoodRow;
