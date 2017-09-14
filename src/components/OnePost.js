import React, { Component } from "react";

import Nav from "./Nav";

class OnePost extends Component {
  render() {
    return (
      <div>
        <Nav />

        <div className="container">

            <div className="row">
                <div className="col-lg-8">
                    <h1>{this.props.post.title}</h1>

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

export default OnePost;
