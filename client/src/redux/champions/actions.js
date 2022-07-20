const actions = {
    CHAMPION_BEGIN: 'CHAMPION_BEGIN',
    CHAMPION_SUCCESS: 'CHAMPION_SUCCESS',
    CHAMPION_ERR: 'CHAMPION_ERR',

    championBegin: () => {
        return {
            type: actions.CHAMPION_BEGIN,
        };
    },

    championSuccess: data => {
        return {
            type: actions.CHAMPION_SUCCESS,
            data,
        };
    },

    championErr: err => {
        return {
            type: actions.CHAMPION_ERR,
            err,
        };
    },
};

export default actions;
