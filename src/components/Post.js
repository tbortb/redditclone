import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap'
import { FaArrowUp } from 'react-icons/fa'
import { FaArrowDown } from 'react-icons/fa'
import { FaComment } from 'react-icons/fa'
import { hookUpComponent } from '../Helpers'
import { increaseVote, decreaseVote } from '../actions/Posts'
import { addComment } from '../actions/Comments'
import { selectCommentsForPostId } from '../reducers/index'
import Moment from 'react-moment';
import CommentSection from './CommentSection';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = { showComment: false };

  toggleComment = () => this.setState(prevState => ({ ...prevState, showComment: !prevState.showComment }))

  plusVote = () => this.props.increaseVote(this.props.post.id)
  minusVote = () => this.props.post.votes > 0 ? this.props.decreaseVote(this.props.post.id) : ""

  render = () => {
    return (
      <Row className="mt-3">
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src={this.props.post.img_url}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>{this.props.post.title}
                <p></p>
                <FaArrowUp className="clickable" onClick={this.plusVote} /> {this.props.post.votes}
                <FaArrowDown className="clickable" onClick={this.minusVote} />
              </CardTitle>
              <CardSubtitle>{this.props.post.author}</CardSubtitle>
              <CardText>
                {this.props.post.content}
              </CardText>
              <hr />
              <div className="clickable" onClick={this.toggleComment}>
                <Moment fromNow>{this.props.post.createdAt}</Moment> | <FaComment />
                {this.props.comments.length} {this.props.comments.length === 1 ? "Comment" : "Comments"}
              </div>
              {this.state.showComment ?
                <CommentSection post_id={this.props.post.id} comments={this.props.comments} /> :
                ""}
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  comments: selectCommentsForPostId(state, ownProps.post.id)
});
export default hookUpComponent(mapStateToProps, { increaseVote, decreaseVote, addComment }, Post)
