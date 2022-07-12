import { combineReducers } from 'redux';
import { summonerReducer } from "./summoners/reducers";

const rootReducers = combineReducers({
    summoner: summonerReducer,
})

export default rootReducers;