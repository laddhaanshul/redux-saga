import {
    SET_FEEDS_RESPONSE,
    SET_STRIPS_RESPONSE,
    FETCH_FEEDS_SUCCEEDED,
    FETCH_STRIPS_SUCCEEDED,
    FETCH_FEEDS_FAILED,
    FETCH_STRIPS_FAILED
} from '../actions/ResponseData'

import FeedsDummyResponse from '../../Constants/FeedsDummyResponse';
import StripsDummyResponse from '../../Constants/StripsDummyResponse';

const initialState = {
    responseFeedData: undefined,
    responseStripsData: undefined
}

const responseDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FEEDS_SUCCEEDED:
            console.log(action.receivedFeed)
            return { ...state, responseFeedData: action.receivedFeed }
        case FETCH_STRIPS_SUCCEEDED:
            return { ...state, responseStripsData: action.receivedStrips }
        case FETCH_FEEDS_FAILED:
            return { responseFeedData: undefined }
        case FETCH_STRIPS_FAILED:
            return { responseStripsData: undefined }
        default:
            return state
    }
}

export default responseDataReducer
