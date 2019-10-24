import React from "react"; // {useEffect }

import { connect } from "react-redux";
import { getNotiComment } from "../../actions/Notification/NotiComment";

import DialogNoti from "../Status/DialogNoti";

const FriendLike = ({ notiComment, userId, getNotiComment, status, user }) => {
  React.useEffect(() => {
    getNotiComment(userId);
  }, [notiComment.length, getNotiComment, userId]);

  const handleLike = () => {
    return (
      <div>
        {status.map((feed, key) => {
          const noti = notiComment.filter(comment => {
            return comment.statusId === feed.id;
          });

          if (noti.length === 0) return <div key={key}></div>;
          const text =
            noti.length > 1
              ? `${noti[noti.length - 1].text} and ${noti.length -
                  1} others comment on your status`
              : noti[0].text;
          const isLike = noti
            .map(n => {
              return n.sender === userId;
            })
            .includes(true);
          const numLike = noti.length;
          return (
            <div key={key}>
              <DialogNoti
                text={text}
                userId={userId}
                user={user}
                feed={feed}
                noti={noti}
                isLike={isLike}
                numLike={numLike}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return <div>{handleLike()}</div>;
};

const mapStateToProps = state => {
  // const status = Object.values(state.status)
  return {
    notiComment: Object.values(state.notiComment),
    userId: state.user.id,
    user: state.user,
    status: Object.values(state.status)
  };
};

export default connect(
  // mapStateToProps,
  // { getNotiComment, ClickLike, UnClickLike, createNotiLike, deleteNotiLike }
  mapStateToProps,
  {
    getNotiComment
  }
)(FriendLike);
