import actions from "./actions";
import axios from "axios";

const {
    summonerBegin,
    summonerSuccess,
    summonerErr,
} = actions;

const getSummoner = () => {
    return async (dispatch) => {
        try {
            await dispatch(summonerBegin());
            const summoner = await axios.get(
                "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/장나나냐?api_key=RGAPI-914fd54f-3b53-45da-b4be-b8e0a2e1a2a3"
            );
            console.log(summoner);
            await dispatch(summonerSuccess(summoner.data));
        } catch (err) {
            await dispatch(summonerErr(err));
        }
    };
}

export {getSummoner};