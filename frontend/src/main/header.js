import React from 'react';

export default props => {
  const keyHandler = (e) => {
    if (e.key === '0') {
      e.shiftKey ? props.handleSearch() :  props.handleSearch()
    } 
  }

  return (
    <header>
      <div className="container">
        <h1>
          Logo
        </h1>

        <form>
          <input id='description' type="text" 
              value={props.description} 
              onChange={props.handleChange} 
              placeholder="Nunca dejes de buscar" 
              onKeyUp={keyHandler}/>
          <button onClick={props.handleSearch}></button>
        </form>

      </div>

    </header>
  )
}
