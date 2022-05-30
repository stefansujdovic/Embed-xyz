import { EARN_EMBED } from "../constants"

const InitalState = {
    embed: []
}


export default (state = InitalState, action) => {
    switch(action.type) {
        case EARN_EMBED: return { ...state, embed: action.data }
        default: return state;
    }
}