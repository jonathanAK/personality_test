import {ActiveViewEnum} from "../models/ActiveView";

interface Action {
    type: string;
    payload: any;
}

const pageViewState = {
    activeView: ActiveViewEnum.start,
    activeQuestion: 0,
};

const pageViewReducer = (state = pageViewState, action: Action) => {
    switch (action.type) {
        case 'ADVANCE_QUESTION':
            return {
                ...state,
                activeQuestion: state.activeQuestion + 1
            };

        case 'CHANGE_VIEW':
            return {
                activeView: action.payload,
                activeQuestion: 0
            };

        case 'RESET_VIEW':
            return {...pageViewState};


        default:
            return state;
    }
};

export default pageViewReducer;