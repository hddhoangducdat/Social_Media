import React from "react";
import { css } from "glamor";
// import InfiniteScroll from "react-infinite-scroll-component";
// import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ScrollToBottom from "react-scroll-to-bottom";
import "../../assets/css/theme.css";
import { maxWidth } from "@material-ui/system";

// const style = {
//   height: 30,
//   border: "1px solid green",
//   margin: 6,
//   padding: 8
// };

const ROOT_CSS = css({
  height: 500,
  width: maxWidth
});

class App extends React.Component {
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

  render() {
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
          <p>
            Nostrud nisi duis veniam ex esse laboris consectetur officia et.
            Velit cillum est veniam culpa magna sit exercitation excepteur
            consectetur ea proident. Minim pariatur nisi dolore Lorem ipsum
            adipisicing do. Ea cupidatat Lorem sunt fugiat. Irure est sunt
            nostrud commodo sint.
          </p>
          <p>
            Duis consectetur ad in fugiat et aliquip esse adipisicing occaecat
            et sunt ea occaecat ad. Tempor anim consequat commodo veniam nostrud
            sunt deserunt adipisicing Lorem Lorem magna irure. Eu ut ipsum magna
            nulla sunt duis Lorem officia pariatur. Nostrud nisi anim nostrud ea
            est do nostrud cupidatat occaecat dolor labore do anim. Laborum quis
            veniam ipsum ullamco voluptate sit ea qui adipisicing aliqua sunt
            dolor nulla. Nulla consequat sunt qui amet. Pariatur esse pariatur
            veniam non fugiat laboris eu nulla incididunt.
          </p>
          <p>
            Laboris duis do consectetur aliquip non aliquip ad ad quis minim.
            Aute magna tempor occaecat magna fugiat culpa. Commodo id eiusmod ea
            pariatur consequat fugiat minim est anim. Ipsum amet ipsum eu nisi.
            Exercitation minim amet incididunt tempor do ut id in officia eu sit
            est. Dolor qui laboris laboris tempor sunt velit eiusmod non ipsum
            exercitation ut sint ipsum officia.
          </p>
        </ScrollToBottom>
        {/* </InfiniteScroll> */}
      </div>
    );
  }
}

export default App;
