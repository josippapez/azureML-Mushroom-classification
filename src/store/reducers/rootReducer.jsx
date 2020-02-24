const initState={
    response : []
}
const rootReducer= (state=initState,action) =>{
    switch (action.type) {
        case 'FETCH_RESULTS':
            console.log('Fetched response', action.response.Results.output1.value)
            return {...state, response:action.response.Results.output1.value};
        case 'FETCH_RESPONSE_ERROR':
            console.log('Fetch response error',action.err)
            return state;
        default:
            return state;
    }
}

export default rootReducer;