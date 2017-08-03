import { combineReducers } from 'redux'

import currentAgency from './currentAgency'

function news(state = [], action) {
    switch(action.type) {
        case "SEARCH_NEWS":
            return [

            ]
        case "ADD_NEWS":
            var temp = state.concat(action.news)
            return temp;

        case "CHANGE_NEWS":
            return action.payload.data.articles;


        default :
            return state;
    }
}


const newsApp = combineReducers({
    news,
    currentAgency
})

export default newsApp;
