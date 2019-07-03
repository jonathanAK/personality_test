interface Action {
    type: string;
    payload: any;
}

const pageViewState = {
    activeQuestion: 0,
    questionOrder: 1,
    failedToLoadQuiz: false
};

const pageViewReducer = (state = pageViewState, action: Action) => {
    switch (action.type) {
        case 'SET_QUESTION_ORDER':
            return {
                ...state,
                questionOrder: action.payload
            };

        case 'ADVANCE_QUESTION':
            return {
                ...state,
                activeQuestion: state.activeQuestion + 1
            };

        case 'CHANGE_VIEW':
            return {
                ...state,
                activeView: action.payload,
                activeQuestion: 0
            };

        case 'RESET_VIEW':
            return {
                ...pageViewState
            }

        case 'FAILED_LOADING_QUIZ':
            return {
                ...state,
                failedToLoadQuiz: true
            }

        default:
            return state;
    }
};

export default pageViewReducer;