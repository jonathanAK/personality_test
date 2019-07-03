const PERSONALITY_SET_LIST = '[PERSONALITY] SET_LIST';
const PERSONALITY_SET_QUIZ = '[PERSONALITY] SET_QUIZ';

export const personalitySetList = (payload: any) => {
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

const dataState = {
    quizList: [{}],
    quiz: null
};

const dataReducer = (state = dataState, action: any) => {
    switch (action.type) {
        case PERSONALITY_SET_QUIZ:
            return {
                ...state,
                quiz:action.payload
            }
        case PERSONALITY_SET_LIST:
            return {
                ...state,
                quizList:[...action.payload]
            }
        case 'CLEAR_QUIZ':
            return {
                ...state,
                quiz:null
            }
    }
    return state;
};

export default dataReducer;
