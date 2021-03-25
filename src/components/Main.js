import React, { Component } from 'react'
import AddPostForm from './AddPostForm'
import Post from './Post'
import FilterPosts from './FilterPosts'
import { Container, Row, Col, Button } from 'reactstrap'
import { hookUpComponent } from '../Helpers'
import { toggleAddPostForm, loadPosts } from '../actions/Posts'
import { selectFilterdPosts } from '../reducers/index'

class Main extends Component {
  postSorter = (a, b) => b.votes - a.votes;

  render() {
    return (
      <Container className="mt-4">
        <Row>
          <Col sm={{ size: 8, offset: 1 }}>
            <FilterPosts />
          </Col>
          <Col sm="2">
            <Button color="secondary" onClick={this.props.toggleAddPostForm}>Add Post</Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm={{ size: 11, offset: 1 }}>
            {this.props.displayAddPostForm ? <AddPostForm /> : ""}
          </Col>
        </Row>
        <Row onClick={this.props.loadPosts}>
          <Col className="pr-0" sm={{ size: 9, offset: 1 }}>
            {[...this.props.posts].sort(this.postSorter).map(post => <Post key={post.id} post={post} />)}
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return ({
    displayAddPostForm: state.posts.displayAddPostForm,
    posts: selectFilterdPosts(state)
  })
};
export default hookUpComponent(mapStateToProps, { toggleAddPostForm, loadPosts }, Main)


