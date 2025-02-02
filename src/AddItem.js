import React from 'react'
import { FaPlus } from 'react-icons/fa'
export const AddItem = () => {
  return (
    <form className='addForm'>
        <label>Add Item</label>
        <input 
           autoFocus
           type="text"
           id="addItem"
           placeholder='Add Item'
           required
        />
        <button type="submit">
            <FaPlus/>
        </button>
    </form>
  )
}
