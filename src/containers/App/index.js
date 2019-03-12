import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from "../HomePage";
import Movies from "../MoviesList";
import MovieDetailsPage from "../MovieDetailsPage";

export default function App() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
        </Switch>
    );
}