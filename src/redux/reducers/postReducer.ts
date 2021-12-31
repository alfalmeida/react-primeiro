


const initialState = {
    post: null,
    posts: []
}

const postReducer = (state = initialState, action: any) => {
    switch (action.type) { 
        case "loadingPost": 
        return {
            ...state
        }
        default: return state
    }
}

export default postReducer;