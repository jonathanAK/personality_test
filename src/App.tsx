import React from 'react';
import './App.css';
import {ActiveViewEnum} from './models/ActiveView';
import StartPage from './pages/StartPage';
import SummaryPage from './pages/SummaryPage';
import QuizPage from './pages/QuizPage';
import CreatePage from './pages/CreatePage';
import LoadingSpinner from './pages/LoadingSpiner'
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {getList, getQuiz} from './store/personality.api.middleware';
import {Route, Switch} from "react-router-dom";
import {createMuiTheme} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import Container from "@material-ui/core/Container";


interface IProp {
    activeView: ActiveViewEnum
    isQuizListLoaded: boolean
    getData: any
}

const App: React.FC<IProp> = ({activeView, getData, isQuizListLoaded}) => {
    React.useEffect(() => {
        getData();
    }, []);

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#104DA1'
            }
        },
    });

    // get active page: start / quiz / summary / Create
    const getActiveView = (): JSX.Element | undefined => {
     return(
        <Switch>
            <Route exact path="/" component={StartPage}/>
            <Route
                path="/start"
                component={StartPage}
            />
            <Route
                path="/quiz/:permalink"
                component={QuizPage}
            />
            <Route
                path="/quiz"
                component={QuizPage}
            />
            <Route
                path="/summary"
                component={SummaryPage}
            />
        </Switch>
    );
};

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Container maxWidth="sm">
                {getActiveView()}
                </Container>
            </div>
        </ThemeProvider>
    );
};


const mapStateToProps = (state: any) => {
    return {
        activeView: state.pageView.activeView,
        isQuizListLoaded: (state.data.quizList.length > 2)
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getData: () => dispatch(getList())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
