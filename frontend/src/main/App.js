import React, {Component} from 'react';
import Routes from './routes'
import Header from './header'
import { browserHistory } from 'react-router'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { description: '', list: []}
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSearch() {
    console.log(this.state.description)
    browserHistory.push('/' + this.state.description);
  }

  handleChange(e) {
    this.setState({
        ...this.state, description: e.target.value
    })
  }

  render() {
    return  (
      <div>
        <Header handleChange={this.handleChange}
                handleSearch={this.handleSearch} 
                description={this.state.description} ></Header>
        <Routes></Routes>
      </div>
    )
  }
}
