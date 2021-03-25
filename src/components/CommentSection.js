import { hookUpComponent } from '../Helpers';
import { addComment } from '../actions/Comments';
import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.initilaState;
    }

    initilaState = { newCommentContent: "" }

    addNewComment = e => {
        e.preventDefault();
        this.props.addComment({
            post_id: this.props.post_id,
            content: this.state.newCommentContent
        });
        this.setState(prevState => ({ ...prevState, newCommentContent: "" }));
    }

    updateNewComment = e => this.setState({ newCommentContent: e.target.value });

    render() {
        return (<div>
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="text" name="comment" id="comment-field" placeholder="Enter a comment here"
                        onChange={this.updateNewComment} value={this.state.newCommentContent} />
                </FormGroup>
                <Button onClick={this.addNewComment}>
                    Submit
                </Button>
            </Form>
            <ul className="mt-2">
                {this.props.comments.map((c, id) => <li key={id}>{c.content}</li>)}
            </ul>
        </div>)
    }
}

export default hookUpComponent(() => ({}), { addComment }, CommentSection);