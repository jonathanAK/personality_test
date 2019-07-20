import React from 'react';
import './App.css';
import StartPage from './pages/StartPage/StartPage';
import SummaryPage from './pages/SummaryPage/SummaryPage';
import QuizPage from './pages/QuizPage/QuizPage';
import Header from './components/Header/Header';
import {Route, Switch} from "react-router-dom";
import {createMuiTheme} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {getList} from './store/personality.api.middleware';


interface IProp {
    getData: any
}

const App: React.FC<IProp> = ({getData}) => {
    React.useEffect(() => {
        getData();
    }, [getData]);

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#C1A600'
            }
        },
    });

    // get active page: start / quiz / summary / Create
    const getActiveView = (): JSX.Element | undefined => {
        return (
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
                <Route
                    path="/"
                    component={StartPage}
                />
            </Switch>
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header/>
                <Container maxWidth="sm">
                    {getActiveView()}
                </Container>
            </div>
        </ThemeProvider>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getData: () => dispatch(getList())
});

export default connect(null, mapDispatchToProps)(App);
