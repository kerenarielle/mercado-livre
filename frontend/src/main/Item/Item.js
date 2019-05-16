import React, { Component } from 'react';
import axios from 'axios'
import Header from '../header/header';
import { browserHistory } from 'react-router';

const URL = 'http://localhost:3003/'

export default class Item extends Component {

  constructor(props) {
    super(props)
    this.state = {lista: [], descr: [], description: ''};
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.componentDidMount()
  }

  componentDidMount(){
    this.getDetalheItem();
  }

  handleChange(e) {
    this.setState({
        ...this.state, description: e.target.value
    })
  }

  handleSearch() {
    browserHistory.push('/' + this.state.description)
  }


  getDetalheItem() {
    axios.get(`${URL}api/items/${this.props.params.id}`).then(
      response => {

        axios.get(`${URL}api/items/${this.props.params.id}/descriptions`).then(
          descricao => {
            this.setState({lista: response.data , descr: descricao.data}, function() {})
          })
      }
    )
  }

  render() {
    const lista = this.state.lista;

    const listaImagens = () => {
      const imagens = this.state.lista.pictures || [];

      return imagens.map( e => (
        <img key={e.id} src={e.url} alt="imagem"/>
      ))
    }

    const getDescricao = () => {
      const descricao = this.state.descr || [];

      return descricao.map(e => (
        <p key={e.id}>{e.plain_text}</p>
      ))
    }


    return (
      <section>
        <Header handleChange={this.handleChange} handleSearch={this.handleSearch} description={this.state.description}></Header>
        <section className="container item-produto">
          <div>
            {listaImagens()}
          </div>
          <div>
            <span>{lista.condition === 'new' ? 'Novo' : 'Usado'} - {lista.sold_quantity}</span>
            <strong>{lista.title}</strong>
            <span>${lista.price}</span>
            <button>Comprar</button>

          </div>
          <div>
            <h4>Descripción del producto</h4>
            {getDescricao()}
          </div>
          
        </section>
      </section>
    )
  }
}