const actions = {
    SUMMONER_BEGIN: 'SUMMONER_BEGIN',
    SUMMONER_SUCCESS: 'SUMMONER_SUCCESS',
    SUMMONER_ERR: 'SUMMONER_ERR',

    summonerBegin: () => {
        return {
            type: actions.SUMMONER_BEGIN,
        };
    },

    summonerSuccess: data => {
        return {
            type: actions.SUMMONER_SUCCESS,
            data,
        };
    },

    summonerErr: err => {
        return {
            type: actions.SUMMONER_ERR,
            err,
        };
    },
};

export default actions;
