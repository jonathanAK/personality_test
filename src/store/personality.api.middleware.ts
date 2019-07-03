import {Dispatch, Middleware, MiddlewareAPI} from 'redux';
import {personalitySetList,personalitySetQuiz} from './dataReducer';
import {randPrime} from '../scripts/math';

const GET_LIST = '[PERSONALITY] GET_LIST';
const GET_QUIZ = '[PERSONALITY] GET_QUIZ';

export const getList = () =>{
    return {
        type: GET_LIST
    }
}

export const getQuiz = (permalink:string) =>{
    return {
        type: GET_QUIZ,
        payload: permalink
    }
}

const getListFlow:Middleware = ({dispatch}: MiddlewareAPI) => (next: Dispatch) => action => {
    if (action.type === GET_LIST) {
        fetch(process.env.PUBLIC_URL + '/quizList.json')
            .then(res => res.json())
            .then((data: Array<any>) => {
                dispatch(personalitySetList(data));
            })
            .catch((e) => {
                console.log("Page Not Found");
            })
    }
    return next(action);
};

const getQuizFlow:Middleware = ({dispatch}: MiddlewareAPI) => (next: Dispatch) => action => {
    if (action.type === GET_QUIZ) {
        fetch(process.env.PUBLIC_URL +'/quizes/'+ action.payload + '/quiz.json')
            .then(res => res.json())
            .then((data: any) => {
                dispatch(personalitySetQuiz(data));
                dispatch({type:'SET_QUESTION_ORDER',payload:randPrime(data.questions.length)});
            })
            .catch((e) => {
                dispatch({type:'FAILED_LOADING_QUIZ'});
            })
    }
    return next(action);
};


export const fetchMdl = [getListFlow,getQuizFlow];

export default fetchMdl;