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
                process.env.REACT_APP_RESTAPI_HOST
            );
            await dispatch(summonerSuccess(summoner.data));
        } catch (err) {
            await dispatch(summonerErr(err));
        }
    };
}

export {getSummoner};