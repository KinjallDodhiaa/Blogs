import React, { useEffect, useState } from "react";
import "../css/style.css";
import ReactQuill from "react-quill";
import { Link, useParams } from "react-router-dom";
const axios = require("axios").default;

const EditPosts = (props) => {
  const { id } = useParams();

  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    const foundPostToEdit = props.edit.find((post) => post._id === id);

    if (foundPostToEdit && id) {
      console.log(foundPostToEdit);
      setName(foundPostToEdit.name);
      setTitle(foundPostToEdit.title);
      setContent(foundPostToEdit.content);
    }
  }, [id, props.edit]);

  const handleBody = (data) => {
    setContent(data);
  };

  const updateBlogs = async (title, content, name) => {
    var data = { title, content, name };
    try {
      axios.put(`http://localhost:3001/posts/${id}`, data).then((res) => {
        props.sendGetRequest();
        window.location.replace("/showPosts");
      });
    } catch (error) {
      console.log(error);
    }
    console.log(data);
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="please write your name over here..."
                type="text"
                className="form-control border border-dark"
                id="inputTitle"
              />
            </div>

            <div className="form-group">
              <label for="inputTitle">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={content}
                className="border border-dark"
                placeholder="write something amazing..."
                modules={EditPosts.modules}
                formats={EditPosts.formats}
                onChange={handleBody}
                id="inputContent"
              />
            </div>

            <button
              onClick={() => {
                updateBlogs(title, content, name);
              }}
              type="button"
              className="btn btn-primary mt-5"
            >
              <h3>Save</h3>
            </button>
          </form>
        </div>
        <div className="imagesAddPost">
          <img src="../images/bg-post.jpg" />
        </div>
      </div>
    </section>
  );
};

EditPosts.modules = {
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
EditPosts.formats = [
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

export default EditPosts;

// import React, { useRef, useState } from 'react';
// import ReactQuill from "react-quill";
// import { Link, useParams } from 'react-router-dom';
// import '../css/style.css'

// const EditPosts = ({post:propsPost, updatePost}) => {

//     const {id} = useParams();

//     const [post,setPost] = useState({...propsPost})
//     console.log(post);

//     // const onePost = post.filter(post => post.id == id);
//     // console.log(onePost);
//       const inputTitleRef = useRef();
//       const inputContentRef = useRef();
//       const inputNameRef = useRef();

//         const handleBody = (e) => {
//           console.log(e);
//           inputContentRef.current.value = e;
//         };

//     return (
//       <div className="blog-form">
//         <form>
//           <div className="form-group">
//             <label for="inputTitle">Name</label>
//             <input
//               placeholder="please write your name over here..."
//                 value={post.name}
//               ref={inputNameRef}
//               type="text"
//               className="form-control border border-dark"
//               id="inputTitle"
//             />
//           </div>

//           <div className="form-group">
//             <label for="inputTitle">Title</label>
//             <input
//               ref={inputTitleRef}
//             //   value={props.post.title}
//               type="text"
//               className="form-control border border-dark"
//               id="inputTitle"
//               border
//               border-dark
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="inputContent">Content</label>
//             <ReactQuill
//               className="border border-dark"
//               placeholder="write something amazing..."
//               modules={EditPosts.modules}
//               formats={EditPosts.formats}
//               onChange={handleBody}
//               ref={inputContentRef}
//             //   value={props.post.content}
//               id="inputContent"
//             />
//           </div>
//           <Link to="/showPosts">
//             <button              type="button"
//               className="btn btn-primary mt-5"
//             >
//               <h3>Save</h3>
//             </button>
//             <Link to='/'>Home</Link>
//           </Link>
//         </form>
//       </div>
//     );
// };

// export default EditPosts;
