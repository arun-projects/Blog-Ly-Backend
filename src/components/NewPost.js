import React, { Component } from "react";
import { connect } from "react-redux";

import Nav from "./Nav";
import * as Actions from "../actions";

class NewPost extends Component {
  handleChange(event) {
    this.props.dispatch(
      Actions.postsActions.newPostTyping(event)
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.dispatch(
      Actions
      .postsActions
      .submitPost(this.props.state.newPost, () => {
        this.props.history.push("/posts");
      })
    );
  }

  render() {
    return (
      <div>
        <Nav />

        <div className="container">

            <div className="row">
                <div className="col-lg-8">
                    <h1>New Post</h1>

                    <hr />

                    <form onSubmit={this.handleSubmit.bind(this)}>
                      <div className="margin-top-20">
                          <input onChange={this.handleChange.bind(this)} name="title" type="text" className="form-control" placeholder="Post Title" />
                      </div>

                      <textarea onChange={this.handleChange.bind(this)} name="post_text" className="form-control margin-top-20" placeholder="Your post" rows="10"></textarea>

                      <div className="margin-top-20">
                          <input onChange={this.handleChange.bind(this)} name="post_image" type="text" className="form-control" placeholder="Post Image" />
                      </div>

                      <div className="margin-top-20">
                          <button type="submit" className="btn btn-primary">Submit Post</button>
                      </div>
                    </form>

                </div>

                <div className="col-md-4">
                    <div className="well">
                        <h4>Post Tips</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
