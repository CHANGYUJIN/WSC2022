import React, { useState } from "react";
import "../static/css/ButtonStyle.css";

const Button = (props) => {
  const [state, setState] = useState({
    clicked: props.contents[0],
  });

  const handleBtnClick = (content) => {
    setState({
        clicked: content,
    });
    console.log(content);
    props.getBtnClicked(content);
  };
  

  return (
    <div className={props.type + "-sortList"}>
      {props.contents
        ? props.contents.map((content) => (
            <button
              className={state.clicked === content ? props.type + "-sort clicked" : props.type + "-sort"}
              onClick={(e) => {
                handleBtnClick(content);
              }}
            >
              {content}
            </button>
          ))
        : null}
    </div>
  );
};

export default Button;
