import React, { useRef, useState } from "react";
import "../css/style.css";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
const axios = require("axios").default;

const AddPosts = (props) => {
  const [title, setTitle] = useState("");

  const inputTitleRef = useRef();
  const inputContentRef = useRef();
  const inputNameRef = useRef();

  const handleBody = (e) => {
    console.log(e);
    inputContentRef.current.value = e;
  };

  const addPost = async (postTitle, postContent, postName) => {
    console.log('add post log' + postContent);
    // TODO
    try {
      axios
        .post("http://localhost:3001/posts/", {
          title: postTitle,
          content: postContent,
          name: postName,
        })
        .then((response) => {
          props.sendGetRequest({ title });
          //  console.log("response is :" + JSON.stringify(response));
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addPostsOnClick = async () => {
    console.log(inputContentRef.current);
     addPost(
       inputTitleRef.current.value,
       inputContentRef.current.value,
       inputNameRef.current.value
     );
    setTitle("");
    //  setContent("");
  };

  return (
    <section className="section-1 addPost">
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

        <div className="blog-form">
          <form>
            <div className="form-group">
              <label for="inputTitle">Name</label>
              <input
                placeholder="please write your name over here..."
                ref={inputNameRef}
                type="text"
                className="form-control border border-dark"
                id="inputTitle"
              />
            </div>

            <div className="form-group">
              <label for="inputTitle">Title</label>
              <input
                ref={inputTitleRef}
                type="text"
                className="form-control border border-dark"
                id="inputTitle"
                border
                border-dark
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputContent">Content</label>
              <ReactQuill
                className="border border-dark"
                placeholder="write something amazing..."
                modules={AddPosts.modules}
                formats={AddPosts.formats}
                onChange={handleBody}
                ref={inputContentRef}
                id="inputContent"
              />
            </div>
            <Link to="/showPosts">
              <button
                onClick={() => addPostsOnClick()}
                type="button"
                className="btn btn-primary mt-5 postButton"
              >
                <h3>Save</h3>
              </button>
            </Link>
          </form>
        </div>
        <div className="imagesAddPost">
          <img src="../images/bg-post.jpg" />
        </div>
      </div>
    </section>
    // <>
    //   <section className="section-3">
    //     <div className="main-container">
    //       <div>
    //         <Link className="logo-link">
    //           <img src="images/logo.png" alt="Logo" className="logo" />
    //         </Link>
    //       </div>

    //       <div className="navbar">
    //         <nav className="nav-list">
    //           <Link to="/" className="nav-link">
    //             Home
    //           </Link>
    //           <Link to="/addPosts" className="nav-link">
    //             Posts
    //           </Link>
    //         </nav>
    //       </div>

    //       <div className="imageshow">
    //         <img src="../images/blogpost-1.jpg" />
    //       </div>
    //     </div>
    //     <div className="container mt-5 form-container">
    //       <div className="row">
    //         <form className="m-5">
    //           <div className="form-group">
    //             <label for="inputTitle">Name</label>
    //             <input
    //               placeholder="please write your name over here..."
    //               ref={inputNameRef}
    //               type="text"
    //               className="form-control"
    //               id="inputTitle"
    //             />
    //           </div>

    //           <div className="form-group">
    //             <label for="inputTitle">Title</label>
    //             <input
    //               ref={inputTitleRef}
    //               type="text"
    //               className="form-control"
    //               id="inputTitle"
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="inputContent">Content</label>
    //             <ReactQuill
    //               placeholder="write something amazing..."
    //               modules={AddPosts.modules}
    //               formats={AddPosts.formats}
    //               onChange={handleBody}
    //               ref={inputContentRef}
    //               id="inputContent"
    //             />
    //           </div>
    //           <Link to="/">
    //             <button
    //               onClick={() => addPostsOnClick()}
    //               type="button"
    //               className="btn btn-primary mt-5"
    //             >
    //               <h3>Save</h3>
    //             </button>
    //           </Link>
    //         </form>
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
};

AddPosts.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
AddPosts.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

/*
 * PropType validation
 */

export default AddPosts;
