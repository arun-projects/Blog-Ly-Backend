import React from "react";
import ReactDom from "react-dom";
import { Switch, Route, Router, Redirect } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";

// Create browser history
const history = createBrowserHistory();

// Redux store
import configureStore from "./store/configureStore";
const store = configureStore();

import "./styles/style.scss";

import PostsContainer from "./containers/PostsContainer";
import ShowPostContainer from "./containers/ShowPostContainer";
import NewPost from "./components/NewPost";
import EditPostContainer from "./containers/EditPostContainer";

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Redirect from="/" exact to="/posts" />
        <Route exact path="/posts" component={PostsContainer} />
        <Route exact path="/posts/new" component={NewPost} />
        <Route exact path="/posts/:id" component={ShowPostContainer} />
        <Route exact path="/posts/:id/edit" component={EditPostContainer} />
      </Switch>
    </Router>
  </Provider>
, document.getElementById("app"));
