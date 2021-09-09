import React from 'react';
import Pagination from './Pagination';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./../scss/Pagination.scss";

/**
 * This file is consumed by storybook (dev dependency) to render individual components. 
 * This was used for accessibility and unit testing purposes and can be deleted if there is no need of storybook.
 *
 */


export default {
    component: Pagination,
    title: 'Pagination'
};

export const Default = () => (
    <Router>
        <Route>
            <Pagination pageNumber='0' setPageNumber={() => { }} maxPageNumber='3' />
        </Route>
    </Router>
);