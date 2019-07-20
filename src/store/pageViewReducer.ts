import {Action} from '../models/Action';
import ActiveViewEnum from "../models/ActiveView";

const PERSONALITY_SET_QUESTION_ORDER = '[PERSONALITY] SET_QUESTION_ORDER';
const PERSONALITY_ADVANCE_QUESTION = '[PERSONALITY] ADVANCE_QUESTION';
const PERSONALITY_CHANGE_VIEW = 'CHANGE_VIEW';
const PERSONALITY_RESET_VIEW = '[PERSONALITY] RESET_VIEW';
const PERSONALITY_FAILED_LOADING_QUIZ = '[PERSONALITY] FAILED_LOADING_QUIZ';

export const personalitySetQuestionOrder = (payload: Number) => {
    return {
        type: PERSONALITY_SET_QUESTION_ORDER,
        payload
    }
};

export const personalityAdvanceQuestion = () => {
    return {
        type: PERSONALITY_ADVANCE_QUESTION,
    }
};

export const personalityChangeView = (payload: ActiveViewEnum) => {
    return {
        type: PERSONALITY_CHANGE_VIEW,
        payload
    }
};

export const personalityResetView = () => {
    return {
        type: PERSONALITY_RESET_VIEW,
    }
};

export const personalityFailedLoadingQuiz = () => {
    return {
        type: PERSONALITY_FAILED_LOADING_QUIZ,
    }
};

const pageViewState = {
    activeQuestion: 0,
    questionOrder: 1,
    failedToLoadQuiz: false
};

const pageViewReducer = (state = pageViewState, action: Action) => {
    switch (action.type) {
        case PERSONALITY_SET_QUESTION_ORDER:
            return {
                ...state,
                questionOrder: action.payload
            };

        case PERSONALITY_ADVANCE_QUESTION:
            return {
                ...state,
                activeQuestion: state.activeQuestion + 1
            };

        case PERSONALITY_CHANGE_VIEW:
            return {
                ...state,
                activeView: action.payload,
                activeQuestion: 0
            };

        case PERSONALITY_RESET_VIEW:
            return {
                ...pageViewState
            };

        case PERSONALITY_FAILED_LOADING_QUIZ:
            return {
                ...state,
                failedToLoadQuiz: true
            };

        default:
            return state;
    }
};

export default pageViewReducer;