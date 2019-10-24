import React from "react";
import { css } from "glamor";
import Grid from "@material-ui/core/Grid";
// import InfiniteScroll from "react-infinite-scroll-component";
// import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ScrollToBottom from "react-scroll-to-bottom";
import Avatar from "../Avatar/StatusAva";
import "../../assets/css/theme.css";
import { maxWidth } from "@material-ui/system";
import { connect } from "react-redux";
import { getChat } from "../../actions/Chat/Chat";
// const style = {
//   height: 30,
//   border: "1px solid green",
//   margin: 6,
//   padding: 8
// };
import "../../assets/css/theme.css";

const ROOT_CSS = css({
  // backgroundColor: "whilte",
  height: 500,
  width: maxWidth
});

const Container = ({ friend, getChat, chat }) => {
  // state = {
  //   items: Array.from({ length: 20 }),
  //   hasMore: true
  // };

  // fetchMoreData = () => {
  //   if (this.state.items.length >= 500) {
  //     this.setState({ hasMore: false });
  //     return;
  //   }
  //   // a fake async api call like which sends
  //   // 20 more records in .5 secs
  //   setTimeout(() => {
  //     this.setState({
  //       items: this.state.items.concat(Array.from({ length: 20 }))
  //     });
  //   }, 500);
  // };
  React.useEffect(() => {
    getChat(friend.userId1);
  }, chat.length);

  return (
    <div>
      <p className="chat"> </p>
      {/* <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={
            <div>
              <FiberManualRecordIcon />
              <FiberManualRecordIcon />
              <FiberManualRecordIcon />
            </div>
          }
          height={400}
        > */}
      {/* {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))} */}

      <ScrollToBottom className={ROOT_CSS}>
        <div className="overflowx">
          {chat.length !== 0
            ? chat.map(c => {
                if (
                  c.sender === friend.userId2 ||
                  c.receiver === friend.userId2
                ) {
                  const left = c.sender === friend.userId2 ? c.text : "";
                  const right = c.receiver === friend.userId2 ? c.text : "";
                  return (
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        {/* <Grid item xs={2}> */}

                        {/* </Grid> */}
                        {/* <Grid item xs={4}> */}
                        {left !== "" ? (
                          <div className="ui comments">
                            <div className="comment">
                              <div className="avatar">
                                <img src={c.avatar} />
                              </div>
                              <div className="content">
                                <div className="text ui button fluid primary">
                                  {left}
                                </div>
                                <div>
                                  <img className="image ui small" src={c.url} />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {/* </Grid> */}
                      </Grid>
                      <Grid item xs={5}>
                        {right !== "" ? (
                          <div>
                            <div className="ui button fluid">{right}</div>
                            <div>
                              <img className="image ui fluid" src={c.url} />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </Grid>
                    </Grid>
                  );
                } else return <div>{""}</div>;
              })
            : ""}
        </div>
      </ScrollToBottom>
      {/* </InfiniteScroll> */}
    </div>
  );
};

const mapStateToProps = state => {
  return { chat: Object.values(state.chat) };
};

export default connect(
  mapStateToProps,
  { getChat }
)(Container);
