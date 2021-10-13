import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Jane"
        time="Yesterday at 11am"
        comment="Great!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Bryan"
        time="Today at 6pm"
        comment="Nice Post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Crystal"
        time="Today at 11pm"
        comment="Thanks!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
