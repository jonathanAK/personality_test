import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import ActiveViewEnum from "../../models/ActiveView";
import {Redirect} from "react-router";
import Card from '@material-ui/core/Card';
import './Question.css';
import Button from '@material-ui/core/Button';
import {personalityAdvanceQuestion,personalityChangeView} from '../../store/pageViewReducer';
import {personalityAddScores} from '../../store/scoreReducer';

interface IProps {
    activeQuizQuestion: any
    onAnswer: Function
    isLast: boolean
}


const Question: React.FC<IProps> = ({activeQuizQuestion, onAnswer, isLast}) => {
    if (isLast) {
        return <Redirect to="/summary"/>
    }

    return (
        <div>
            <Card className={"Question-questionImg-Card"}>
                <h2 className={"Question-question"}>{activeQuizQuestion.question}</h2>
                {
                    activeQuizQuestion.img &&
                    <img className={"Question-img"} src={`${process.env.PUBLIC_URL}/img/${activeQuizQuestion.img}`}  alt={'quiz'}/>
                }
            </Card>
            <Card className={"Question-answers-Card"}>
                {
                    activeQuizQuestion.answers.map((answer:any, key:number) => (
                        <Button
                            key={key}
                            className={"Question-answer"}
                            variant="outlined"
                            onClick={() => {
                                onAnswer(answer.values, isLast)
                            }}
                        >
                            {answer.answer}
                        </Button>
                    ))
                }
            </Card>
        </div>
    )
};

const mapStateToProps = (state: any) => {
    const currentQuestionId = ((state.pageView.activeQuestion + 1) * state.pageView.questionOrder) % state.data.quiz.questions.length;
    return {
        activeQuizQuestion: state.data.quiz.questions[currentQuestionId],
        isLast: state.pageView.activeQuestion === state.data.quiz.questions.length
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onAnswer: (payload: [number], isLast: boolean) => {
        if (!isLast) {
            (() => {
                dispatch(personalityAddScores( payload))
            })();
            dispatch(personalityAdvanceQuestion());
        } else {
            (() => {
                dispatch(personalityAddScores( payload))
            })();
            dispatch(personalityChangeView( ActiveViewEnum.summary));
        }
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Question);
