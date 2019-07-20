import {Action} from '../models/Action';

const PERSONALITY_SET_LIST = '[PERSONALITY] SET_LIST';
const PERSONALITY_SET_QUIZ = '[PERSONALITY] SET_QUIZ';
const PERSONALITY_CLEAR_QUIZ = '[PERSONALITY] CLEAR_QUIZ';

export const personalitySetList = (payload: [any]) => {
    return {
        type: PERSONALITY_SET_LIST,
        payload
    }
};

export const personalitySetQuiz = (payload: any) => {
    return {
        type: PERSONALITY_SET_QUIZ,
        payload
    }
};

export const personalityClearQuiz = () => {
    return {
        type: PERSONALITY_CLEAR_QUIZ,
    }
};


const dataState = {
    quizList: [{}],
    quiz: null
};

const dataReducer = (state = dataState, action: Action) => {
    switch (action.type) {
        case PERSONALITY_SET_QUIZ:
            return {
                ...state,
                quiz:action.payload
            };
        case PERSONALITY_SET_LIST:
            return {
                ...state,
                quizList:[...action.payload]
            };
        case PERSONALITY_CLEAR_QUIZ:
            return {
                ...state,
                quiz:null
            };
    }
    return state;
};

export default dataReducer;
