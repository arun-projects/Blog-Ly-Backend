import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as Actions from "../actions";
import Nav from "./Nav";

class OnePost extends Component {
  handleDestroy(event) {
    event.preventDefault();

    const confirmDelete = confirm("Are you sure you want to delete this post?");

    if (confirmDelete) {
      this.props.dispatch(
        Actions.postsActions.destroyPost(this.props.post._id, () => {
          this.props.history.push("/posts");
        })
      );
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <Nav />

        <div className="container">

            <div className="row">
                <div className="col-lg-8">
                    <h1>{this.props.post.title}</h1>

                    <div className="margin-top-20">
                      <Link className="btn btn-primary" to={`/posts/${this.props.post._id}/edit`}>
                        <span className="glyphicon glyphicon-pencil"></span> Edit
                      </Link>

                      <a onClick={this.handleDestroy.bind(this)} className="btn btn-danger margin-left-10" href="#">
                        <span className="glyphicon glyphicon-trash"></span> Delete
                      </a>
                    </div>

                    <hr />

                    <img className="img-responsive" src={this.props.post.post_image} alt="" />

                    <hr />

                    <p>{this.props.post.post_text}</p>

                </div>

                <div className="col-md-4">
                    <div className="well">
                        <h4>About the Author</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
                    </div>

                </div>

            </div>

            <hr />

            <footer>
                <div className="row">
                    <div className="col-lg-12">
                        <p>Copyright &copy; Arun Sood 2015</p>
                    </div>
                </div>
            </footer>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnePost);
