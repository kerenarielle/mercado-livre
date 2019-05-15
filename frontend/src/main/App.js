import React, { Component } from 'react';
import Header from './header';
import Produtos from './listProduct';
import axios from 'axios'
import Routes from './router'


const URL = 'http://localhost:3003/'

export default class mercado extends Component {

  constructor(props) {
    super(props)
    this.state = { description: '', list: []}
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.searchItem = this.searchItem.bind(this)
    this.refresh()
  }

  handleChange(e) {
    this.setState({
        ...this.state, description: e.target.value
    })
  }


  refresh(description = '') {
      const search = description ? `${description}` : ''

      if (search !== '' && search !== undefined) {
        axios.get(`${URL}?description=${search}`)
          .then(resp => {
            let resultados = resp.data.results;
            let descricao = search;
            let lista = []

            resultados.forEach(e => {
              let title = e.title.toLocaleLowerCase();
              if (title.indexOf(descricao) > -1) {
                lista.push(e);
              }
            });

            console.log(lista);
            this.setState({...this.state, description, list: lista})
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

  searchItem(item) {
    axios.get(`${URL}api/items/${item}`)
          .then(resp => {
            console.log(resp);
          })
        
  }

  render() {
    return (
      <div className="App">
        <Routes></Routes>
        <Header handleChange={this.handleChange}
                handleSearch={this.handleSearch} 
                description={this.state.description} ></Header>
        <Produtos list={this.state.list} searchItem={this.searchItem}></Produtos>
      </div>
    )
  }

}


