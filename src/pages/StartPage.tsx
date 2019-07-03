import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import ActiveViewEnum from "../models/ActiveView";
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpiner'
import {Button} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface IProps {
  onStart: any
    quizList : [any]
}

const StartPage: React.FC<IProps> = ({onStart,quizList}) => {
    React.useEffect(() => {
        onStart();
    }, []);

    const useStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    if(quizList.length>2){
        return (
            <div>
                <h1>Find Your True Self</h1>
                <p>Select a quiz to start</p>
                {
                    quizList.map((quiz,key)=>(
                        <Link to={`/quiz/${quiz.permalink}`}  key={key}><Button variant="outlined" className={classes.button}>{quiz.name}</Button></Link>
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
        dispatch({type: 'RESET_VIEW'});
        dispatch({type:'CLEAR_QUIZ'});
    }
});


export default connect(mapStateToProps,mapDispatchToProps)(StartPage);