import React, { Component } from 'react'
import axios from 'axios'
import ListProduct from './list-product.jsx'

const URL = "http://localhost:3003/"


export default class Teste extends Component {

  constructor(props) {
    super(props)
    this.state = {list: []}
    this.refresh()
  }


  refresh() {
      axios.get(`${URL}`)
          .then(resp => 
            this.setState({...this.state, list: resp.data.results})
      )
  }

  render() {
    return (
      <ListProduct list={this.state.list}></ListProduct>
    )
  }
}
