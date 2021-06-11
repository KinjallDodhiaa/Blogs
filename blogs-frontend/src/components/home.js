import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'

const Home = (props) => {
    return (
      <>
        <section className="section-1">
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

          <div className="section-1-banner center">
            <p>Write your own amazing experience</p>
            <Link to="/addPosts" className="link">
              Start here
            </Link>
            {/* <form>
            <p>Enter your name: </p>
            <input
              type='text'
              onChange={(event)=> localStorage.setItem("user", event.target.value)}/>
          </form> */}
          </div>

          <div className="imageshow">
            <img src="../images/blogpost-2.jpg" alt="backGroundImage" />
          </div>
        </section>

      </>
    );
};

export default Home;