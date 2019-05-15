import React, { Component } from 'react';
import ListaProdutos from './listProduct';
import axios from 'axios'
import { browserHistory } from 'react-router'

const URL = 'http://localhost:3003/'

export default class Produtos extends Component {

  constructor(props) {
    super(props)
    this.state = { description: '', list: []}
    this.searchItem = this.searchItem.bind(this)
    this.refresh()
  }

  refresh(description = '') {
      if (this.props.params.id) {
        description = this.props.params.id;

        console.log(description)
      }

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
            this.setState({...this.state, description, list: lista})
          }
        )
      } else {
        axios.get(`${URL}`)
          .then(resp => this.setState({...this.state, description, list: resp.data.results})
        )
      }
  }


  searchItem(item) {
    browserHistory.push('/itens/'+item);
  }

  render() {
    return (
      <div className="App">
        {/* <Header handleChange={this.handleChange}
                handleSearch={this.handleSearch} 
                description={this.state.description} ></Header> */}
        <ListaProdutos list={this.state.list} searchItem={this.searchItem}></ListaProdutos>
      </div>
    )
  }

}


