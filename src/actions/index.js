import {
    CHANGE_FORM,
    SET_AUTH,
    SENDING_REQUEST,
    SET_ERROR_MESSAGE
} from './constants'

export function changeForm(newState) {
    return { type: CHANGE_FORM, newState }
}
