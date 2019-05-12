import React from 'react'

export default props => {
  const renderLista = () => {
    const list = props.list || []

    return list.map(l => (
      <ul>
        <li>{l.id}</li>
      </ul>
    ))
  }
  

  return (
    <div>
      {renderLista()}
    </div>
  )
}