import actions from './actions';

const initialChampionState = {
    data: [],
    chLoading: false,
    error: null,
};

const initialRotationState = {
    data: [],
    rtLoading: false,
    error: null,
};

const {
    CHAMPION_BEGIN,
    CHAMPION_SUCCESS,
    CHAMPION_ERR,

    ROTATION_BEGIN,
    ROTATION_SUCCESS,
    ROTATION_ERR,

} = actions;

const championReducer = (state = initialChampionState, action) => {
    const {type, data, err} = action;
    switch (type) {
        case CHAMPION_BEGIN:
            return{
                ...state,
                chLoading: true,
            };
        case CHAMPION_SUCCESS:
            return{
                ...state,
                data,
                error: false,
                chLoading: false,
            };
        case CHAMPION_ERR:
            return {
                ...state,
                error: err,
                chLoading: false,
            };
        default:
            return state;
    }
};

const rotationReducer = (state = initialRotationState, action) => {
    const {type, data, err} = action;
    switch (type) {
        case ROTATION_BEGIN:
            return{
                ...state,
                rtLoading: true,
            };
        case ROTATION_SUCCESS:
            return{
                ...state,
                data,
                error: false,
                rtLoading: false,
            };
        case ROTATION_ERR:
            return {
                ...state,
                error: err,
                rtLoading: false,
            };
        default:
            return state;
    }
};

export {championReducer, rotationReducer};