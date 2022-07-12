import React, { useState } from "react";
import "../static/css/navbar.css";

const NavBar = (props) => {

    const [state, setState] = useState({
        clicked: props.contents[0],
      });
    
      const handleClick = (content) => {
        setState({
            clicked: content,
        });
      };

  return (
    <>
      <nav className={props.type + "-block"}>
        <ul className={props.type + "-list"}>
          {props.contents.map((content) => {
            return (
              <li className={props.type + "-item"} onClick={(e) => {
                handleClick(content);
              }}>
                <a className={state.clicked === content ? props.type + "-link " + props.type + "-clicked" : props.type + "-link"} href="#">
                  {content}
                </a>
              </li>
            );
          })}
        </ul>
        {props.withSearch ? (
            <form className="nav-search">
              <select className="nav-search-select">
                <option selected>KR</option>
                <option>JP</option>
                <option>OCE</option>
              </select>
              <input
                className="nav-search-input"
                type="text"
                placeholder="소환사명을 입력하세요."
              />
              <button className="nav-search-submit" type="submit">
                검색
              </button>
            </form>
        ) : null}
      </nav>
      {props.withSetting ? (
        <div className="setting">
          <select className="setting-select">
            <option selected>한국어</option>
            <option>영어</option>
            <option>중국어</option>
          </select>
          <button className="login-btn">로그인</button>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
