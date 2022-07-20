const actions = {
    CHAMPION_BEGIN: 'CHAMPION_BEGIN',
    CHAMPION_SUCCESS: 'CHAMPION_SUCCESS',
    CHAMPION_ERR: 'CHAMPION_ERR',

    ROTATION_BEGIN: 'ROTATION_BEGIN',
    ROTATION_SUCCESS: 'ROTATION_SUCCESS',
    ROTATION_ERR: 'ROTATION_ERR',

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
    
    rotationBegin: () => {
        return {
            type: actions.ROTATION_BEGIN,
        };
    },

    rotationSuccess: data => {
        return {
            type: actions.ROTATION_SUCCESS,
            data,
        };
    },

    rotationErr: err => {
        return {
            type: actions.ROTATION_ERR,
            err,
        };
    },
};

export default actions;
