import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
export const LineItems = ({item,handleCheck,handleDelete}) => {
  return (
    <li className="item">
    <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
    />
    <label
        onDoubleClick={() => handleCheck(item.id)}
        style={item.checked ? { textDecoration: "line-through" } : null}
    >
        {item.item}
    </label>
    <FaTrashAlt
        onClick={() => handleDelete(item.id)}
    />
</li>
  )
}
