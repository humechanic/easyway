import {combineReducers, createStore} from "redux";
import homePageReducer from "./reducers/homePageReducer";
import salesPageReducer from "./reducers/salesPageReducer";
import servicePageReducer from "./reducers/servicePageReducer";
import cataloguePageReducer from "./reducers/cataloguePageReducer";
import feedbackReducer from "./reducers/feedbackReducer";
import userDataReducer from "./reducers/userDataReducer";
import newsReducer from "./reducers/newsReducer";
import projectReducer from "./reducers/projectsReducer";

const reducers = combineReducers({
    homePage: homePageReducer,
    salesPage: salesPageReducer,
    servicePage: servicePageReducer,
    cataloguePage: cataloguePageReducer,
    feedbackPage: feedbackReducer,
    userData: userDataReducer,
    AllNews: newsReducer,
    AllProjects: projectReducer,
});
const store = createStore(reducers);

export default store;