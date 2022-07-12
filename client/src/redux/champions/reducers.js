import actions from './actions';

const initialChampionState = {
    data: [],
    smLoading: false,
    error: null,
};

const {
    CHAMPION_BEGIN,
    CHAMPION_SUCCESS,
    CHAMPION_ERR,
} = actions;

const championReducer = (state = initialChampionState, action) => {
    const {type, data, err} = action;
    switch (type) {
        case CHAMPION_BEGIN:
            return{
                ...state,
                smLoading: true,
            };
        case CHAMPION_SUCCESS:
            return{
                ...state,
                data,
                error: false,
                smLoading: false,
            };
        case CHAMPION_ERR:
            return {
                ...state,
                error: err,
                smLoading: false,
            };
        default:
            return state;
    }
};

export {championReducer};