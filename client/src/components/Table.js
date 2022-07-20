import React, { useState } from "react";
import "../static/css/TableStyle.css";

const Table = ({ columns, data }) => {
  const colWidth = ["70", "*", "64", "94", "110", "94", "135"];
  return (
    <table>
      <colgroup>
        {colWidth.map((width) => (
          <col width={width} />
        ))}
      </colgroup>
      <thead>
        <tr>
          {columns.map((col) => {
            var align = "";
            if (col === "챔피언") align = "left";
            return (
              <th key={col} align={align} scope="col">
                {col}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((dataum) => {
          const { rank, imageURL, name, tier, win, pick, ban, opposite } =
            dataum;
          const tierImage = "https://s-lol-web.op.gg/images/icon/icon-tier-" + tier + ".svg";
          return (
            <tr key={name}>
              <td>{rank}</td>
              <td className="rank-champion-td">
                <a className="rank-champion-link" href="#">
                  <img
                    className="rank-champion-img rank-champion-td"
                    src={imageURL}
                  />
                  <span className="rank-champion-td name">{name}</span>
                </a>
              </td>
              <td><img src={tierImage} /></td>
              <td>{win}%</td>
              <td>{pick}%</td>
              <td>{ban}%</td>
              {opposite.map((img) => {
                const { first, second, third } = img;
                return (
                  <td>
                    <img className="opposite-champion-img" src={first} />
                    <img className="opposite-champion-img" src={second} />
                    <img className="opposite-champion-img" src={third} />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
