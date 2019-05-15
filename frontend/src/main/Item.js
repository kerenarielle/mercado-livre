import React, { Component } from 'react';
import axios from 'axios'

const URL = 'http://localhost:3003/'

export default class Item extends Component {

  getDetalheItem() {
    axios.get(`${URL}api/items/${this.props.params.id}`)
      .then(resp => {
        console.log(resp);
      })
  }

  render() {
    return (
      <div>{this.props.params.id}</div>
    )
  }
}