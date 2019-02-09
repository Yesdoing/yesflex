import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'components/Header';
import Search from 'pages/Search';
import TV from 'pages/TV';

export default () => (
    <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
);