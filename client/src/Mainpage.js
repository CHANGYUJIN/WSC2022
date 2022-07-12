import React, { useEffect, useState } from 'react';
import {getSummoner} from "./redux/summoners/actionCreator";
import {useDispatch, useSelector} from "react-redux";
import "./static/css/mainpage.css";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

const MainPage = () => {
    const dispatch = useDispatch();
    const {summoner, smLoading} = useSelector((state) => {
        return{
        summoner: state.summoner.data,
        smLoading: state.summoner.smLoading,
        };
    });

    useEffect(() => {
        dispatch(getSummoner());
    }, [dispatch]);

    const summonerInfo = [];

    summoner.map((summoners) => {
        const{id, name, summonerLevel } = summoners;
        summonerInfo.push(name);
    })
    console.log(summonerInfo);

    const gameList = [
        "리그오브레전드",
        "Duo",
        "QWER (이스포츠 전적)",
        "발로란트",
        "배틀그라운드",
        "오버워치",
        "이터널 리턴",
        "톡피지지",
        "데스크톱",
      ];
      const navList = [
        "홈",
        "챔피언 분석",
        "게임 모드",
        "통계",
        "랭킹",
        "프로관전",
        "멀티서치",
        "커뮤니티",
      ];
    
      const [keyword, setKeyword] = useState("");
    
      const getKeyword = (keyword) => {
        setKeyword(keyword);
      }

    return (
        <>
        <div className="header">
        <div className="game-container">
          <NavBar type="game" contents={gameList} withSetting={true} />
        </div>
        <div className="nav-container">
          <NavBar type="nav" contents={navList} withSearch={true} />
        </div>
      </div>
      <SearchBar placeholder="챔피언 검색" getKeyword={getKeyword}/>
      <div className="contents">
        <Card type="position" />
        <div className="card-container">
          <Card type="champion" withKeyword={true} keyword={keyword}/>
          <Card type="rank" />
        </div>
      </div>
      <footer>
        <br></br>
      </footer>
        </>
    );
};

  export default MainPage;