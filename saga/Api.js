const URL_FETCH_FEEDS = 'https://private-c31a5-task27.apiary-mock.com/videos'
const URL_FETCH_STRIPES = 'https://5f16ad48a346a0001673929b.mockapi.io/api/mockdata/chemicals'

function* getFeeds() {
    const response = yield fetch(URL_FETCH_FEEDS, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
    console.log(response)
    return response
}

function* getStripes() {
    const response = yield fetch(URL_FETCH_STRIPES, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
    return response
}

export const Api = {
    getFeeds,
    getStripes
}