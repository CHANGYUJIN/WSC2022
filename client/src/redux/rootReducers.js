import { combineReducers } from 'redux';
import { championReducer } from './champions/reducers';
import { summonerReducer } from "./summoners/reducers";

const rootReducers = combineReducers({
    summoner: summonerReducer,
    champions: championReducer,
})

export default rootReducers;