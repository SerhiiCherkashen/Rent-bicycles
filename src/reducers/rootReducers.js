import { combineReducers } from "redux";
import { likeReducer } from "./LIkesReducer/likeReducer";
import { titleReducer } from "./TitleReducer/titleReducer";
import { inputReducer } from "./InputReducers/inputReducer";


export const rootReducer = combineReducers({
    LikesPage: likeReducer,
    TitlePage: titleReducer,
    InputPage: inputReducer
})



