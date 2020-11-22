export const SET_FEEDS_RESPONSE = 'SET_FEEDS_RESPONSE'
export const SET_STRIPS_RESPONSE = 'SET_STRIPS_RESPONSE'

export const setFeedResponseDevice = (feedsResponse) => {
    return { type: SET_FEEDS_RESPONSE, responseFeedData: feedsResponse }
}

export const setStripsResponseDevice = (stripsResponse) => {
    return { type: SET_STRIPS_RESPONSE, responseStripsData: stripsResponse }
}