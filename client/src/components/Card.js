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

  // Object.keys(ranks[0]).map((col) => {
  //   if (col !== "imageURL")
  //     columns.push(col);
  // })

  console.log(props.keyword);

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
            <Button contents={championSort} type="champion" />
          </div>
          <div className="champion-list-container">
            <div className="champion-list">
              {champions.map((champion) => {
                if (champion.content.includes(props.keyword))
                  return (
                    <li className="champion-item">
                      <img
                        className="champion-img"
                        src={champion.imageURL}
                        alt={champion.content}
                      />
                      <span>{champion.content}</span>
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
