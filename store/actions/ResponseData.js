export const SET_FEEDS_RESPONSE = 'SET_FEEDS_RESPONSE'
export const SET_STRIPS_RESPONSE = 'SET_STRIPS_RESPONSE'

export const FETCH_FEEDS_SUCCEEDED = 'FETCH_FEEDS_SUCCEEDED'
export const FETCH_STRIPS_SUCCEEDED = 'FETCH_STRIPS_SUCCEEDED'
export const FETCH_FEEDS_FAILED = 'FETCH_FEEDS_FAILED'
export const FETCH_STRIPS_FAILED = 'FETCH_STRIPS_FAILED'

export const fetchFeedResponse = () => {
    console.log('Fetching response')
    return {
        type: SET_FEEDS_RESPONSE
    }
}

export const fetchStripsResponse = () => {
    return {
        type: SET_STRIPS_RESPONSE
    }
}

export const fetchFeedSuccessAction = (receivedFeed) => {
    return {
        type: FETCH_FEEDS_SUCCEEDED,
        receivedFeed
    }
}

export const fetchStripsSuccessAction = (receivedStrips) => {
    return {
        type: FETCH_STRIPS_SUCCEEDED,
        receivedStrips
    }
}

export const fetchFeedFailedAction = (error) => {
    return {
        type: FETCH_FEEDS_FAILED,
        error
    }
}

export const fetchStripsFailedAction = (error) => {
    return {
        type: FETCH_STRIPS_FAILED,
        error
    }
}
