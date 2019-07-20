import React from 'react';
import {AppBar, Toolbar, Typography,Button} from '@material-ui/core';
import logo from '../../assets/logo.png';
import {NavLink} from 'react-router-dom';
import "./Header.css";

const Header: React.FC = () => {
    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div className={"navBar"}>
                        <NavLink exact to="/" className="nav-link" activeClassName="nav-link-active">
                            <Button variant="contained" color="secondary" className={"navBar-Button"}>
                            <Typography variant="h6" className="mx-3 cursor-pointer">
                                Start New Quiz
                            </Typography>
                            </Button>
                        </NavLink>
                        <NavLink exact to="/summary" className="nav-link" activeClassName="nav-link-active">
                            <Button variant="contained" color="secondary" className={"navBar-Button"}>
                            <Typography variant="h6" className="mx-3 cursor-pointer">
                                Finish Now
                            </Typography>
                        </Button>
                        </NavLink>
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    )
};

export default Header;