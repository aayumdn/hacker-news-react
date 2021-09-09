import React from 'react';
import Items from './Items';
import { BrowserRouter as Router, Route } from "react-router-dom";

/**
 * This file is consumed by storybook (dev dependency) to render individual components. 
 * This was used for accessibility and unit testing purposes and can be deleted if there is no need of storybook.
 *
 */


export default {
    component: Items,
    title: 'Items'
};

export const Default = () => (
    <Router>
        <Route>
            <Items type="newstories" title="New"/>
        </Route>
    </Router>

);