import React, { Component } from 'react';
import Header from './header';
import Produtos from './listProduct';
import axios from 'axios'

const URL = 'http://localhost:3003/'

export default class mercado extends Component {
  constructor(props) {
    super(props)
    this.state = { list: []}
    this.refresh()
  }

  refresh() {
    axios.get(`${URL}`)
        .then(resp => this.setState({...this.state, list: resp.data.results})
    )
}

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Produtos list={this.state.list}></Produtos>
      </div>
    )
  }

}


