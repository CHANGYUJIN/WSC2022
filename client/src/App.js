// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import MainPage from "./Mainpage";
import MyPage from "./container/Mypage";
import "./static/css/mainpage.css";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

const ProviderConfig = () => {
  // const [path, setPath] = useState(window.location.pathname);

  // useEffect(() => {
  //   let unmounted = false;
  //   if (!unmounted) {
  //     setPath(window.location.pathname);
  //   }
  //   // eslint-disable-next-line no-return-assign
  //   return () => (unmounted = true);
  // }, [setPath]);

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
    <BrowserRouter basename="/wp">
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

      <Routes>
        <Route path="/Mainpage" element={<MainPage />} />
        <Route path="/Mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};
function App() {
  return (
    <Provider store={store}>
      <ProviderConfig />
    </Provider>
  );
}

export default hot(App);
