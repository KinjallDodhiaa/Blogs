import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-quill/dist/quill.snow.css";

import Home from './components/home';
import AddPosts from './components/addPosts';
import Posts from './components/posts';
import ShowPosts from './components/showPosts';
import EditPosts from './components/editPosts';

const axios = require("axios").default;


const App = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
      sendGetRequest();
    }, []);

    const sendGetRequest = async () => {
      try {
        await axios
          .get("http://localhost:3005/posts/")
          .then((response) => {setPost(response.data);console.log(response.data);});
      } catch (err) {
        console.error(err);
      }
    };



    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addPosts">
            <AddPosts sendGetRequest={sendGetRequest} />
          </Route>
          <Route path="/showPosts">
            <ShowPosts show={post} sendGetRequest={sendGetRequest} />
          </Route>
          <Route path="/posts/:id">
            <Posts showPostDetails={post} sendGetRequest={sendGetRequest} />
          </Route>
          <Route path="/editPosts/:id">
            {post && <EditPosts edit={post} sendGetRequest={sendGetRequest} />}
          </Route>
          {/* <Route path="/edit/:id"
          render={(props) => {
            const posts = post.find((post) => post.id === props.match.params.id );
            if (posts) {
              return <EditPosts post={post} updatePost={updateBlogs}/>
            }else{
              return <Redirect to='/'/>
            }
          }}>
            <EditPosts state={post} sendGetRequest={sendGetRequest}/>
          </Route> */}
        </Switch>
      </Router>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));