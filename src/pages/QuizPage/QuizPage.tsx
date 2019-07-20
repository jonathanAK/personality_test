import React from 'react';
import {connect} from "react-redux";
import Question from "../../components/Quetsion/Question";
import LoadingSpinner from '../../components/LoadingSpiner/LoadingSpiner'
import {Dispatch} from "redux";
import {Redirect, RouteComponentProps} from 'react-router';
import {getQuiz} from "../../store/personality.api.middleware";
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {personalityResetScores} from '../../store/scoreReducer';


interface IProps {
    activeQuiz: any
    startingNewQuiz: boolean
    resetScores: () => void
    getQuizData: (permalink: string) => void
    failedToLoadQuiz: boolean
    currentQuestion:number
    quiz:any
}

type RParams = {
    permalink: string
};

const QuizPage: React.FC<IProps & RouteComponentProps<RParams>> = ({match, activeQuiz, startingNewQuiz, resetScores, getQuizData, failedToLoadQuiz,quiz,currentQuestion}) => {
    React.useEffect(() => {
        if (startingNewQuiz) {
            if(match.params.permalink){
                getQuizData(match.params.permalink);
            }
            resetScores();
        }
    }, [getQuizData,match.params.permalink,startingNewQuiz,resetScores]);

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        margin: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    const BorderLinearProgress = withStyles({
        root: {
            height: 10,
            backgroundColor: lighten('#ff6c5c', 0.5),
        },
        bar: {
            borderRadius: 20,
            backgroundColor: '#ff6c5c',
        },
    })(LinearProgress);

    if (failedToLoadQuiz) {
        return <Redirect to="/"/>
    }
    if (activeQuiz) {
        const quizProgress = currentQuestion/quiz.questions.length*100;
        return (
            <div>
                <h1>{activeQuiz.quizName}</h1>
                <BorderLinearProgress
                    className={classes.margin}
                    variant="determinate"
                    color="secondary"
                    value={quizProgress}
                />
                <Card>
                <Question/>
                </Card>
            </div>
        );
    }
    return <LoadingSpinner/>;
};


const mapStateToProps = (state: any) => {
    return {
        activeQuiz: state.data.quiz,
        startingNewQuiz: state.pageView.activeQuestion === 0,
        failedToLoadQuiz: state.pageView.failedToLoadQuiz,
        quiz:state.data.quiz,
        currentQuestion: state.pageView.activeQuestion
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    resetScores: () => {
        dispatch(personalityResetScores());
    },
    getQuizData: (permalink: string) => dispatch(getQuiz(permalink))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
