import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from "../HomePage";
import Movies from "../MoviesList";

export default function App() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movies" component={Movies} />
        </Switch>
    );
}