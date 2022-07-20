import actions from "./actions";
import axios from "axios";

const {
    championBegin,
    championSuccess,
    championErr,

    rotationBegin,
    rotationSuccess,
    rotationErr,

} = actions;

const getChampions = () => {
    return async (dispatch) => {
        try {
            await dispatch(championBegin());
            const champion = await axios.get(
                "https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/champion.json"
            );
            await dispatch(championSuccess(champion.data));
        } catch (err) {
            await dispatch(championErr(err));
        }
    };
}

const getRotations = () => {
    return async (dispatch) => {
        try{
            await dispatch(rotationBegin());
            const rotation = await axios.get(
                "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations" + "?api_key=RGAPI-2dc883ff-691f-4506-be4f-f41f29fd9415"
            );
            await dispatch(rotationSuccess(rotation.data));
        } catch (err) {
            await dispatch(rotationErr(err));
        }
    };
}

export {getChampions, getRotations};