import actions from './actions';

const initialSummonerState = {
    data: [],
    chLoading: false,
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
                chLoading: true,
            };
        case SUMMONER_SUCCESS:
            return{
                ...state,
                data,
                error: false,
                chLoading: false,
            };
        case SUMMONER_ERR:
            return {
                ...state,
                error: err,
                chLoading: false,
            };
        default:
            return state;
    }
};

export {summonerReducer};