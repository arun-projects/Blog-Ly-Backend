import React, { Component } from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";

class AllPosts extends Component {
  render() {
    return (
      <div>
        <Nav />

        <div className="container">
          {this.props.posts.map((post, index) => {
            return (
              <div key={index}>
                <div className="row">
                  <div className="col-md-7">
                    <a href="#">
                      <img className="img-responsive" src={post.post_image} alt="" />
                    </a>
                  </div>
                  <div className="col-md-5">
                    <h3>{post.title}</h3>
                    <p>{post.post_text}</p>
                    <Link to={`/posts/${post._id}`} className="btn btn-primary">
                      View Post <span className="glyphicon glyphicon-chevron-right"></span>
                    </Link>
                  </div>
              </div>

              <hr />
            </div>
          );
        }) }

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

export default AllPosts;
