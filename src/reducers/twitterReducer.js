import { CHANGE_IMAGE, CHANGE_NAME } from "../actions/userAction.js";

const defaultState = {
    user: {
        name: "Monster",
        image: "https://gravatar.com/avatar/123?d=monsterid"
    },
    stats: {
        following: 50,
        followers: 500
    }
};

export const twitterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload || state.user.name
                }
            };
        case CHANGE_IMAGE:
            return {
                ...state,
                user: {
                    ...state.user,
                    image: action.payload || state.user.image
                }
            };
        case 'DECREMENT_FOLLOWERS':
            return {
                ...state,
                stats: {
                    ...state.stats,
                    followers: state.stats.followers - 1
                }
            };
        case 'INCREMENT_FOLLOWERS':
            return {
                ...state,
                stats: {
                    ...state.stats,
                    followers: state.stats.followers + 1
                }
            };
        case 'DECREMENT_FOLLOWING':
            return {
                ...state,
                stats: {
                    ...state.stats,
                    following: state.stats.following - 1
                }
            };
        case 'INCREMENT_FOLLOWING':
            return {
                ...state,
                stats: {
                    ...state.stats,
                    following: state.stats.following + 1
                }
            };
        default:
            return state;
    }
};
