import React from 'react';

export default props => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() :  props.handleSearch()
    } 
  }

  const keyForm = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  return (
    <header>
        <div className="container">
          <h1>
            <a href="/">Mercado Livre</a>
          </h1>

          <form onKeyDown={keyForm}>
            <input id='description' type="text" 
                value={props.description} 
                onChange={props.handleChange} 
                placeholder="Nunca dejes de buscar" 
                onKeyUp={keyHandler}/>
            <button type="button" onClick={props.handleSearch}></button>
          </form>
        </div>
      </header>
  )
}
