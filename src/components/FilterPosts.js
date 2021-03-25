import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { hookUpComponent } from '../Helpers'
import { filterPosts }from '../actions/Posts'

class FilterPosts extends Component {

  setFilter = e => this.props.filterPosts(e.target.value);

  render () {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="filter-field" className="mr-sm-2">Filter by title:</Label>
          <Input type="text" name="email" id="filter-field" onChange={this.setFilter} />
        </FormGroup>
      </Form>
    )
  }
}

export default hookUpComponent(() => ({}), { filterPosts }, FilterPosts)