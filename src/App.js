import React, { Component } from 'react'
import { AddToDo } from './components/AddToDo'
import { Form } from './components/Form'

export default class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <AddToDo />
    </div>
    );
  }
}


