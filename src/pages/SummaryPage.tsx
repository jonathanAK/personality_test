import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";

interface IProps {
    result: any
    setFinishedQuiz: () => void
}

const SummaryPage: React.FC<IProps> = ({result,setFinishedQuiz}) => {
    React.useEffect(() => {
        setFinishedQuiz();
    }, []);
    if(!result){
        return <Redirect to="/"/>
    }
    return (
        <div>
            <h1>{result.title}</h1>
            <p>{result.description} </p>

            <Link to={`/quiz/`}><h4>Go again</h4></Link>
            <Link to={`/`}><h4>Checkout some others</h4></Link>
        </div>
    );
};



const mapStateToProps = (state: any) => {
    if(!state.data.quiz){
        return {result:null};
    }
    return {
        result:state.data.quiz.results[state.scores.results.indexOf(Math.max(...state.scores.results))]
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setFinishedQuiz: () => {
        dispatch({type: 'RESET_VIEW'});
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);