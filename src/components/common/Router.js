import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'components/common/Header';
import Search from 'pages/Search';
import TV from 'pages/TV';
import Detail from 'pages/Detail';

export default () => (
    <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />
            <Route path="/movie/:id" component={Detail} />
            <Route path="/show/:id" component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
);