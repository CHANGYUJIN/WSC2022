import React, { useEffect, useState } from 'react';
import {getSummoner} from "./redux/summoners/actionCreator";
import {useDispatch, useSelector} from "react-redux";

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
        summonerInfo.push(summoners);
    })
    console.log(summonerInfo);

    return (
        <>
        <p>haha</p>
        </>
    );
};

  export default MainPage;