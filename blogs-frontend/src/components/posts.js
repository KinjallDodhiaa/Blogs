import React from "react";
import { Link, useParams } from "react-router-dom";
import '../css/style.css'



const Posts = (props) => {
  const { id } = useParams();

  const foundPost = props.showPostDetails.find((post) => id == post.id);


  return (
    <section className="post-section">
      {foundPost ? (
        <div className="container blogs-container">
          <div className="row">
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/showPosts">
                      Blogs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/addPosts"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Write Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h1 className="card-title">{foundPost.title}</h1>
                <p
                  dangerouslySetInnerHTML={{ __html: foundPost.content }}
                  className="card-text"
                ></p>

                <Link className="p-5" to={`/editPosts/${foundPost.id}`}>
                  <button className="btn btn-primary mt-5 postButton">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Posts;
