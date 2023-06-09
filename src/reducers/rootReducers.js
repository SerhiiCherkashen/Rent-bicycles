import { combineReducers } from "redux";
import { likeReducer } from "./LIkesReducer/likeReducer";
import { titleReducer } from "./TitleReducer/titleReducer";
import { inputReducer } from "./InputReducers/inputReducer";
import { bikeReducer } from "./BikeReducers/bikeReducer";
import { schetchikReducer } from "./SchetchikReducer/schetchikReducer";


export const rootReducer = combineReducers({
    LikesPage: likeReducer,
    TitlePage: titleReducer,
    InputPage: inputReducer,
    BikePage: bikeReducer,
    SchetchikPage: schetchikReducer,
})



