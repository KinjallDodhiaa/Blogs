import React from 'react';
import { Link } from 'react-router-dom';

const MostPopularBlog1 = () => {
    return (
      <section className="post-section">
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
                  <h1 className="card-title">Title</h1>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>
        ) 
      </section>
    );
};

export default MostPopularBlog1;