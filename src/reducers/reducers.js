import { CHANGE_FORM, SET_AUTH, SENDING_REQUEST, SET_ERROR_MESSAGE } from '../actions/constants'

const initialState = {
    formState: {
        username: '',
        password: ''
    },
    currentlySending: false,
    loggedIn: false,
    errorMessage: ''
}

// Taking care of changing application state
export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FORM:
            return {...state, formState: action.newFormState }
        case SET_AUTH:
            return {...state, loggedIn: action.newAuthState }
        case SENDING_REQUEST:
            return {...state, currentlySending: action.sending }
        case SET_ERROR_MESSAGE:
            return {...state, errorMessage: action.error}
        default:
            return state

    }
}
