import { combineReducers } from 'redux';
import { championReducer, rotationReducer } from './champions/reducers';
import { summonerReducer } from "./summoners/reducers";

const rootReducers = combineReducers({
    summoner: summonerReducer,
    champions: championReducer,
    rotations: rotationReducer,
})

export default rootReducers;