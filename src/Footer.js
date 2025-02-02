import React from 'react'

export const Footer = ({length}) => {
  return (
    <footer>{length} List {length===1?"Item":"Items"}</footer>
  )
}
