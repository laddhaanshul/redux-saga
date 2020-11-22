import { SET_FEEDS_RESPONSE } from '../actions/ResponseData'
import { SET_STRIPS_RESPONSE } from '../actions/ResponseData'

import FeedsDummyResponse from '../../Constants/FeedsDummyResponse';
import StripsDummyResponse from '../../Constants/StripsDummyResponse';

const initialState = {
    responseFeedData: FeedsDummyResponse,
    responseStripsData: StripsDummyResponse
}

const responseDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FEEDS_RESPONSE:
            return { ...state, responseFeedData: action.responseFeedData }
        case SET_STRIPS_RESPONSE:
            return { ...state, responseStripsData: action.responseStripsData }
        default:
            return state
    }
}

export default responseDataReducer