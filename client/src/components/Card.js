import React, { useState } from "react";
import "../static/css/CardStyle.css";
import Select from "./Select";
import Table from "./Table";
import Button from "./Button";
import tiers from "../demoData/tiers.json";
import countries from "../demoData/countries.json";
import champions from "../demoData/champions.json";
import ranks from "../demoData/rank.json";

const Card = (props) => {
  const classes = "card " + props.className;
  const positionSort = ["탑", "미드", "정글", "바텀", "서포터"];
  const championSort = ["전체", "탑", "정글", "미드", "원딜", "서포터"];
  const columns = [
    "순위",
    "챔피언",
    "티어",
    "승률",
    "픽률",
    "밴률",
    "상대하기 어려운 챔피언",
  ];

  const [btnClicked, setBtnClicked] = useState("전체");
  var tag = "";
  const getBtnClicked = (btnClicked) => {
    setBtnClicked(btnClicked);
  };

  // const championList = [];
  // const {
  //   getChampionList,
  // } = () => {
  //   console.log(btnClicked);
  //   if (btnClicked === "전체") championList.push(props.contents);
  //   console.log(championList);
  // };
  
  //&& tags.includes(tag)

  console.log(btnClicked);

  switch (props.type) {
    case "position":
      return (
        <div className={classes}>
          <Select
            optionList={countries}
            withImage="true"
            default={countries[0]}
          />
          <Select optionList={tiers} withImage="true" default={tiers[0]} />
          <Button contents={positionSort} type="position" />
        </div>
      );
    case "champion":
      return (
        <div className="champion-container">
          <div className="champion-sort-container">
            <Button
              contents={championSort}
              type="champion"
              getBtnClicked={getBtnClicked}
            />
          </div>
          <div className="champion-list-container">
            <div className="champion-list">
              {props.contents.map((champion) => {
                const { name, image, tags } = champion;
                if (name.includes(props.keyword))
                  return (
                    <li className="champion-item">
                      <img
                        className="champion-img"
                        src={
                          "https://opgg-static.akamaized.net/images/lol/champion/" +
                          image.full +
                          "?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1657294091517"
                        }
                        alt={name}
                      />
                      <span>{name}</span>
                    </li>
                  );
              })}
            </div>
          </div>
        </div>
      );
    case "rank":
      return (
        <div className="champion-rank">
          <Table columns={columns} data={ranks} />
        </div>
      );
    default:
      return <></>;
  }
};

export default Card;
