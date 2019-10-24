import React from "react";

const CommentList = ({ comment }) => {
  return (
    <div>
      {comment.length !== 0
        ? comment.map(c => {
            return (
              <div className="ui comments">
                <div className="comment">
                  <div className="avatar">
                    <img src={c.avatar} alt="" />
                  </div>
                  <div className="content">
                    <div className="author">{c.username}</div>
                    <div className="metadata">
                      <span className="date">{c.date}</span>
                    </div>
                    <div className="text">{c.text}</div>
                    <img class="ui fluid small image" src={c.url} alt="" />
                    <div className="actions">
                      {/* <div className="reply">Reply</div> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default CommentList;
