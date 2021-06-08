import { CONSTANTS } from '../../constants/AppConst';

const initialState = {
    loader: false,
    userData: []
};

const NewsFeedReducer = (state = initialState, action) => {
    console.log("NewsFeedReducer Reducer ==>", action);

    switch (action.type) {
        case CONSTANTS.NEWS_FEED_DETAILS_REQUEST: return { ...state, loader: true };
        case CONSTANTS.NEWS_FEED_DETAILS_SUCCESS:
            return { ...state, loader: false, userData: action.payload };

        default:
            return state;
    }




};

export default NewsFeedReducer;
