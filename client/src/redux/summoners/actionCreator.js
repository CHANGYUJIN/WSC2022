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
                "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/장나나냐?api_key=RGAPI-2dc883ff-691f-4506-be4f-f41f29fd9415"
            );
            console.log(summoner);
            await dispatch(summonerSuccess(summoner.data));
        } catch (err) {
            await dispatch(summonerErr(err));
        }
    };
}

export {getSummoner};