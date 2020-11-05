import React, { Component } from 'react';
import {
  Button,
  BreadcrumbItem,
  Breadcrumb,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg src={dish.image} />
      <CardTitle tag="h5" mt="3">
        {dish.name}
      </CardTitle>
      <CardText>{dish.description}</CardText>
    </Card>
  );
}

function RenderComments({ comments }) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div className="mb-4">
            <div className="mb-3">{comment.comment}</div>
            <div>
              -- {comment.author}, {comment.date}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const handleModal = () => {
  console.log('modal');
};

const Dishdetail = ({ dish, comments }) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
              <RenderComments comments={comments} />
              <Button onClick={handleModal}>Submit comment</Button>
              <Modal isOpen={true} toggle={handleModal} className="">
                <ModalHeader toggle={handleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                  <Form>
                    <FormGroup>
                      <Label for="switch">Rating</Label>
                      <Input type="select" name="switch" id="switch">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="name">Your Name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="message">Comment</Label>
                      <Input type="textarea" name="message" id="message" />
                    </FormGroup>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={handleModal}>
                    Submit
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
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
