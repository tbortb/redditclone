import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { addPost } from '../actions/Posts'
import { hookUpComponent } from '../Helpers'

class AddPostForm extends Component {

  initialState = {
    newPost: {
      title: "",
      content: "",
      author: "",
      image_url: ""
    },
    titleValid: false,
    contentValid: false,
    authorValid: false,
    image_urlValid: false
  }

  state = this.initialState;

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPost(this.state.newPost);
    this.setState(prevState => this.initialState);
  }

  updateState = e => {
    //By default, react inserts null values into to event, so that it can use the same event
    //again next time. But that way the event target is null, when the asyncronous setState 
    //gets invoked. That is why the event should explicitly persist
    e.persist();
    const target = e.target.dataset.attribute;
    const value = e.target.value;
    this.setState(prevState => ({ newPost: {...prevState.newPost,
      [target]: value },
     [target+"Valid"]: value !==  ""}));
  }

  render() {
    return (
      <Row>
        <Col sm="10">
          <Form>
            <FormGroup>
              <Label for="title-field">Title</Label>
              <Input type="text" name="title" id="title-field"
                data-attribute="title" onChange={this.updateState}
                value={this.state.newPost.title} 
                className={this.state.titleValid ? "valid" : "invalid"} />
            </FormGroup>
            <FormGroup>
              <Label for="body-field">Body</Label>
              <Input type="text" name="body" id="body-field"
                data-attribute="content" onChange={this.updateState}
                value={this.state.newPost.content} 
                className={this.state.contentValid ? "valid" : "invalid"}/>
            </FormGroup>
            <FormGroup>
              <Label for="author-field">Author</Label>
              <Input type="text" name="author" id="author-field"
                data-attribute="author" onChange={this.updateState}
                value={this.state.newPost.author} 
                className={this.state.authorValid ? "valid" : "invalid"}/>
            </FormGroup>
            <FormGroup>
              <Label for="image-field">Image URL</Label>
              <Input type="text" name="image" id="image-field"
                data-attribute="image_url" onChange={this.updateState}
                value={this.state.newPost.image_url} 
                className={this.state.image_urlValid ? "valid" : "invalid"}/>
            </FormGroup>
            <Button type="submit" onClick={this.handleSubmit}
            disabled={!(this.state.titleValid && this.state.contentValid &&
              this.state.authorValid && this.state.image_urlValid)}>Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default hookUpComponent(() => ({ }), { addPost }, AddPostForm)
