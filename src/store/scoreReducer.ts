import {Action} from '../models/Action';

const PERSONALITY_ADD_SCORES = '[PERSONALITY] ADD_SCORES';
const PERSONALITY_RESET_SCORES = '[PERSONALITY] RESET_SCORES';

export const personalityAddScores = (payload: [Number]) => {
    return {
        type: PERSONALITY_ADD_SCORES,
        payload
    }
};

export const personalityResetScores = () => {
    return {
        type: PERSONALITY_RESET_SCORES,
    }
};


const scoreState = {
    results : [0,0,0,0]
};

const scoreReducer = (state=scoreState, action: Action) => {
    switch (action.type) {
        case PERSONALITY_ADD_SCORES:
            return {
                ...state,
                results : state.results.map((a, i) => a + action.payload[i])
            };
        case PERSONALITY_RESET_SCORES:
            return scoreState;

        default:
            return state;
    }
};

export default scoreReducer;