import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
  return <div>saludos</div>;
}

function RenderComments({ comments }) {
  return <div>desde narnia</div>;
}

const Dishdetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default Dishdetail;

/*
class Dishdetail extends Component {
  renderComments(comments) {}

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
}s
*/
