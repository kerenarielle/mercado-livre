import React, { Component } from 'react';
import Header from './header';
import Produtos from './listProduct';
import axios from 'axios'

const URL = 'http://localhost:3003/'

export default class mercado extends Component {

  constructor(props) {
    super(props)
    this.state = { description: '', list: []}
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)

    this.refresh()
  }


  handleChange(e) {
    this.setState({
        ...this.state, description: e.target.value
    })
  }

  refresh(description = '') {
      const search = description ? `=${description}` : ''

      if (search !== '' && search !== undefined) {
        axios.get(`${URL}?description${search}`)
          .then(resp => {
            const resultados = resp.data.results;
            this.setState({...this.state, description, list: resp.data.results})
          }
        )
      } else {
        axios.get(`${URL}`)
          .then(resp => this.setState({...this.state, description, list: resp.data.results})
        )
      }
  }


  handleSearch() {
    this.refresh(this.state.description)
  }

  render() {
    return (
      <div className="App">
        <Header handleChange={this.handleChange}
                handleSearch={this.handleSearch} 
                description={this.state.description} ></Header>
        <Produtos list={this.state.list}></Produtos>
      </div>
    )
  }

}


