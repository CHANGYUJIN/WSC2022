import actions from "./actions";
import axios from "axios";

const {
    championBegin,
    championSuccess,
    championErr,
} = actions;

const getChampions = () => {
    return async (dispatch) => {
        try {
            await dispatch(championBegin());
            const champion = await axios.get(
                "https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/champion.json"
            );
            console.log(champion);
            await dispatch(championSuccess(champion.data));
        } catch (err) {
            await dispatch(championErr(err));
        }
    };
}

export {getChampions};