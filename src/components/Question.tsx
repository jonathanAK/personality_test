import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import ActiveViewEnum from "../models/ActiveView";
import {Redirect} from "react-router";

interface IProps {
    activeQuizQuestion: any
    onAnswer: any
    isLast: boolean
}


const Question: React.FC<IProps> = ({activeQuizQuestion, onAnswer, isLast}) => {
    if (isLast) {
        return <Redirect to="/summary"/>
    }
    return (
        <div>
            <h2>{activeQuizQuestion.question}</h2>
            {
                activeQuizQuestion.img && <img src={`${process.env.PUBLIC_URL}/img/${activeQuizQuestion.img}`}/>
            }
            <ul>
                <li onClick={() => {
                    onAnswer(activeQuizQuestion.answers[0].values, isLast)
                }}>{activeQuizQuestion.answers[0].answer}</li>
                <li onClick={() => {
                    onAnswer(activeQuizQuestion.answers[1].values, isLast)
                }}>{activeQuizQuestion.answers[1].answer}</li>
                <li onClick={() => {
                    onAnswer(activeQuizQuestion.answers[2].values, isLast)
                }}>{activeQuizQuestion.answers[2].answer}</li>
                <li onClick={() => {
                    onAnswer(activeQuizQuestion.answers[3].values, isLast)
                }}>{activeQuizQuestion.answers[3].answer}</li>
            </ul>
        </div>
    )
};

const mapStateToProps = (state: any) => {
    const currentQuestionId = ((state.pageView.activeQuestion+1) * state.pageView.questionOrder) % state.data.quiz.questions.length;
    return {
        activeQuizQuestion: state.data.quiz.questions[currentQuestionId],
        isLast: state.pageView.activeQuestion === state.data.quiz.questions.length
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onAnswer: (payload: [number], isLast: boolean) => {
        if (!isLast) {
            (() => {
                dispatch({type: 'ADD_SCORES', payload})
            })();
            dispatch({type: 'ADVANCE_QUESTION'});
        } else {
            (() => {
                dispatch({type: 'ADD_SCORES', payload})
            })();
            dispatch({type: 'CHANGE_VIEW', payload: ActiveViewEnum.summary});
        }
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Question);
