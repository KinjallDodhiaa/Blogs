import React from 'react';
import { Link } from 'react-router-dom';
import "../css/style.css";
const axios = require("axios").default;


const ShowPosts = (props) => {

    return (
      <section className="section-2">
        <div className="main-container">
          <div className="navbar">
            <nav className="nav-list">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/showPosts" className="nav-link">
                Blogs
              </Link>
              <Link to="/addPosts" className="nav-link">
                Write Blog
              </Link>
            </nav>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="mb-5 mt-5">Most Popular Blogs</h1>
              <Link to="/mostPopularBlog1" className="link">
                <h2>
                  Blog & website design for non-designers (how to make your blog
                  look incredible without spending a fortune)
                </h2>
              </Link>
              <p>posted by Nayan Dodhia</p>
              <Link to="/mostPopularBlog2" className="link">
                <h2>
                  Point and shoot photography (how to create incredible
                  photographs with your phone or whatever camera you have in
                  your pocket)
                </h2>
              </Link>
              <p>posted by Rahul Gada</p>
              <Link to="/mostPopularBlog3" className="link">
                <h2>
                  The art of getting what you want (how to use confidence and
                  technique to get what you want from life, your relationships
                  and your career)
                </h2>
              </Link>
              <p>posted by Mittal Nagda</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="mb-5 mt-5">Your Story</h1>
              {props.show.length < 1 ? (
                <h2> No Blogs Yet</h2>
              ) : (
                props.show.map((post, index) => (
                  <>
                    <Link
                      key={index}
                      to={`/posts/${post._id}`}
                      className="link"
                    >
                      <h2>{post.title}</h2>
                    </Link>

                    <p>posted by {post.name}</p>
                  </>
                ))
              )}
            </div>
          </div>
          <div className="imagesShowPost">
            <img src="../images/blogpost-1.jpg" />
          </div>
        </div>
      </section>
    );
};

export default ShowPosts;