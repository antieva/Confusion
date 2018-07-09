import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.renderedDish.comments
    }
  }

  renderComments(comments) {
    if (comments != null) {
      return(
        comments.map((comment => {
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          var date = new Date(comment.date);
          return(
            <div key={comment.id}>
              <p>{comment.comment}</p>
              <p>--{comment.author}, {date.toLocaleDateString('eng', options)}</p>
            </div>
          );
        }))
      );
    } else {
      return(
        <div></div>
      );
    }
  }

  render() {
    return(
      <div className="row">
        <div className="col-12 col-md-5 mt-1">
          <Card>
            <CardImg width="100%" src={this.props.renderedDish.image} alt={this.props.renderedDish.name} />
            <CardImgOverlay>
              <CardTitle>{this.props.renderedDish.name}</CardTitle>
              <CardText>{this.props.renderedDish.description}</CardText>
            </CardImgOverlay>
          </Card>
        </div>
        <div className="col-12 col-md-5 mt-1">
          <h3>Comments:</h3>
          {this.renderComments(this.state.comments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
