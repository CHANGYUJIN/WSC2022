// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import MainPage from "./Mainpage";
import MyPage from "./container/Mypage";

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
  
  return (
    <BrowserRouter basename="/wp">
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
