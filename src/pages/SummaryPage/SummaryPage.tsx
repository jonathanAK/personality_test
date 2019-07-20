import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import Card from "@material-ui/core/Card";
import './SummaryPage.css';
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
import {personalityResetView} from '../../store/pageViewReducer';

interface IProps {
    result: any
    quizName: string
    setFinishedQuiz: () => void
}

const SummaryPage: React.FC<IProps> = ({result, setFinishedQuiz, quizName}) => {
    React.useEffect(() => {
        setFinishedQuiz();
    }, [setFinishedQuiz]);
    if (!result) {
        return <Redirect to="/"/>
    }
    return (
        <div>
            <h1>{quizName}</h1>
            <Card>
                <Card className={"Summary-topCard"}>
                    <h1>{result.title}</h1>
                    {
                        result.img &&
                        <img className={"Question-img"} src={`${process.env.PUBLIC_URL}/img/${result.img}`} alt={"summary"}/>
                    }
                </Card>
                <Card className={"Summary-bottomCard"}>
                    <Typography variant="body1">
                        <p>{result.description} </p>
                    </Typography>
                    <Link to={`/quiz/`}>
                        <Button
                            className={"Summary-buttons"}
                            variant="outlined">
                            <h4>Go again</h4>
                        </Button>
                    </Link>
                    <Link to={`/`}>
                        <Button
                            className={"Summary-buttons"}
                            variant="outlined">
                            <h4>Checkout some others</h4>
                        </Button>
                    </Link>
                </Card>
            </Card>
        </div>
    );
};


const mapStateToProps = (state: any) => {
    if (!state.data.quiz) {
        return {result: null};
    }
    return {
        result: state.data.quiz.results[state.scores.results.indexOf(Math.max(...state.scores.results))],
        quizName: state.data.quiz.quizName
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setFinishedQuiz: () => {
        dispatch(personalityResetView());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);