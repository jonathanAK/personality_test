import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import LoadingSpinner from '../../components/LoadingSpiner/LoadingSpiner'
import QuizItem from "../../components/QuizItem/QuizItem";
import {personalityClearQuiz} from"../../store/dataReducer";
import {personalityResetView} from '../../store/pageViewReducer';

interface IProps {
    onStart: Function
    quizList: [any]
}

const StartPage: React.FC<IProps> = ({onStart, quizList}) => {
    React.useEffect(() => {
        onStart();
    }, [onStart]);


    if (quizList.length > 2) {
        return (
            <div>
                <h1>Find Your True Self</h1>
                <p>Select a quiz to start</p>
                    {
                        quizList.map((quiz, key) => (
                            <QuizItem name={quiz.name} permalink={quiz.permalink} img={quiz.img} key={key}/>
                        ))
                    }


            </div>
        );
    }
    return <LoadingSpinner/>;
};

const mapStateToProps = (state: any) => {
    return {
        quizList: state.data.quizList
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onStart: () => {
        dispatch(personalityResetView());
        dispatch(personalityClearQuiz());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(StartPage);