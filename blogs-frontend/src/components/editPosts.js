import React, { useEffect, useRef, useState } from "react";
import "../css/style.css";
import ReactQuill from "react-quill";
import { Link, useParams } from "react-router-dom";
const axios = require("axios").default;

const EditPosts = (props) => {
  const { id } = useParams();

  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const inputTitleRef = useRef();
  const inputContentRef = useRef();
  const inputNameRef = useRef();


  useEffect(() => {
    const foundPostToEdit = props.edit.find((post) => post.id === id);

    if (foundPostToEdit && id) {
      console.log(foundPostToEdit);
      setName(foundPostToEdit.name);
      setTitle(foundPostToEdit.title);
      console.log(foundPostToEdit.content);
    }
  }, []);


  const handleBody = (data) => {
       setContent(data);
  };

  const nameValue = (name) => {
    if(!name){
      const foundPostToEdit = props.edit.find((post) => post.id === id);
      if(foundPostToEdit)
     {return foundPostToEdit.name}} 
else{
      return name
    }
  }

    const titleValue = (title) => {
      if (!title) {
        const foundPostToEdit = props.edit.find((post) => post.id === id);
        if (foundPostToEdit) {
          return foundPostToEdit.title;
        }
      } else {
        return title;
      }
    };

    const quillValue = (quillContent) => {
      if (!quillContent) {
        const foundPostToEdit = props.edit.find((post) => post.id === id);
        if (foundPostToEdit) {
          return foundPostToEdit.content;
        }
      } else {
        return quillContent;
      }
    }

  const updateBlogs = async (id, title, content, name) => {
    // console.log("edit porstlog" + content);
    var data = { id, title, content, name };
     try {
       axios
         .post("http://localhost:3005/posts/update", data)
         .then((res) => {props.sendGetRequest(); window.location.replace('/showPosts')});
     } catch (error) {
       console.log(error);
     }
    console.log(data);
  };
  // console.log('content' + content);

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
                value={nameValue(name)}
                onChange={(e) => setName(e.target.value)}
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
                value={titleValue(title)}
                onChange={(e) => setTitle(e.target.value)}
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
                value={quillValue(content)}
                className="border border-dark"
                placeholder="write something amazing..."
                modules={EditPosts.modules}
                formats={EditPosts.formats}
                onChange={handleBody}
                // ref={inputContentRef}
                id="inputContent"
              />
            </div>
            
            <button
              onClick={() => {
                updateBlogs(id, title, content, name);
              }}
              type="button"
              className="btn btn-primary mt-5"
            >
              <h3>Save</h3>
            </button>
          </form>
          )
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
