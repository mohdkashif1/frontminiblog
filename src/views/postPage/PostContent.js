import React, { useEffect, useState } from "react";
import { server } from "../../components/server";
import "./postpage.css";
import { useParams } from "react-router-dom";
import Comments from "../../components/modals/Comments";

const PostContent = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [message, setMessage] = useState();

  const getPost = async () => {
    const response = await fetch(`${server}/post/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    if (response.error) {
      return setMessage(response.error);
    }
    setPost(response);
  };

  const [show, setShow] = useState(false);
  const commentButtonHandler = (e) => {
    e.preventDefault();

    setShow(true);
  };
  useEffect(() => {
    if (id) {
      getPost();
    }
  }, [id]);

  const getDate = (d) => {
    const date = new Date(d);
    const newDate =
      date.getDate() +
      " " +
      date.toLocaleString("default", { month: "long" }) +
      " " +
      date.getFullYear();
    return newDate;
  };
  return (
    <>
      {post ? (
        <div className="post-content">
          <Comments setShow={setShow} show={show} post={post} />
          <div className="post-cotent-top text-center">
            <p style={{ marginBottom: "0.5rem" }}>
              <i className="fa fa-calendar">{" " + getDate(post.createdAt)}</i>
            </p>
            <h1>{post.title}</h1>
            <p>
              <i className="fa fa-pencil mb-4">{" " + post.writer.name}</i>
            </p>
          </div>

          <div className="row">
            <div className="col-md-6 post-content-img">
              <img src={post.image} alt="" />
            </div>

            <div className="col-md-6 left-border">
              <div
                className="Inner-html"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>

              <div className="row comments-section text-center">
                <div className="col-4">
                  <i className="fa fa-thumbs-up "> Like</i>{" "}
                </div>
                <div className="col-4">
                  <i onClick={commentButtonHandler} className="fa fa-comment ">
                    {" "}
                    Comment
                  </i>
                </div>
                <div className="col-4">
                  {" "}
                  <i className="fa fa-share ">Share</i>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PostContent;
