import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
  renderComments(comments) {
    return comments.map((comment) => {
      return (
        <div>
          <div>{comment.comment}</div> <br />
          <div>
            -- {comment.author},{' '}
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            }).format(new Date(Date.parse(comment.date)))}
          </div>
          <br />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container row mt-4">
        {this.props.dish != null && (
          <div className="col-12 col-sm-12 col-md-5 mt-2">
            <Card>
              <CardImg width="100%" src={this.props.dish.image}></CardImg>
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
        )}
        {this.props.dish != null && (
          <div className="col-12 col-sm-12 col-md-6">
            <h3>Comments</h3>
            {this.renderComments(this.props.dish.comments)}
          </div>
        )}
      </div>
    );
  }
}

export default Dishdetail;
