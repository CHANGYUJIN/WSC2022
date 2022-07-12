import React, { useState } from "react";
import "../static/css/SelectStyle.css";

const Select = (props) => {
  const [state, setState] = useState({
    currentContent: props.default.content,
    currentImage: props.withImage ? props.default.imageURL : "",
    dropDownOpen: false,
  });
  const divClass = "select-btn-container " + props.className;

  const liClass = state.dropDownOpen ? "select-item" : "select-item hidden";

  const handleLiClick = (content, image) => {
    setState({
      currentContent: content,
      currentImage: image,
      dropDownOpen: false,
    });
  };

  const handleBtnClick = () => {
    setState({
      ...state,
      dropDownOpen: !state.dropDownOpen,
    });
  };

  return (
    <div className="select-container">
      <div className={divClass} onClick={handleBtnClick}>
        <button className="select-btn" onClick={handleBtnClick}>
          <img className="select-img" src={state.currentImage} alt="" />
          {state.currentContent}
        </button>
        <button className="select-icon">{state.dropDownOpen ? "∧" : "∨"}</button>
      </div>
      <ul className="select-list">
        {props.optionList.map((option) => {
          return (
            <li
              className={liClass}
              onClick={(e) => {
                handleLiClick(option.content, option.imageURL);
              }}
            >
              <img className="select-img" src={option.imageURL} alt="" />
              <span>{option.content}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
