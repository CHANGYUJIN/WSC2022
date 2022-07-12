import actions from './actions';

const initialSummonerState = {
    data: [],
    smLoading: false,
    error: null,
};

const {
    SUMMONER_BEGIN,
    SUMMONER_SUCCESS,
    SUMMONER_ERR,
} = actions;

const summonerReducer = (state = initialSummonerState, action) => {
    const {type, data, err} = action;
    switch (type) {
        case SUMMONER_BEGIN:
            return{
                ...state,
                smLoading: true,
            };
        case SUMMONER_SUCCESS:
            return{
                ...state,
                data,
                error: false,
                smLoading: false,
            };
        case SUMMONER_ERR:
            return {
                ...state,
                error: err,
                smLoading: false,
            };
        default:
            return state;
    }
};

export {summonerReducer};