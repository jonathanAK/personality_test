import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";

interface IProps {
    correct: number;
    total: number;
    onStartAgain: () => void;
}

const SummaryPage: React.FC<IProps> = ({correct, total, onStartAgain}) => {
    const allCorrectMessage = ['Well Done', 'Good Job', 'Great Work'];

    function getRandomAllCorrectMessage(): string {
        return allCorrectMessage[Math.floor(Math.random() * allCorrectMessage.length)];
    }

    return (
        <div>
            <h1>Summary Page</h1>
            <p>You've answer correctly on {correct} of {total} questions. </p>
            {
                (correct === total) &&
                <p>{getRandomAllCorrectMessage()}!</p>
            }
            <button onClick={onStartAgain}>Try again</button>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        correct: state.scores.correctAnswers,
        total: state.questions.length
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onStartAgain: () => {
        dispatch({type: 'RESET_SCORE'});
        dispatch({type: 'RESET_VIEW'});
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);