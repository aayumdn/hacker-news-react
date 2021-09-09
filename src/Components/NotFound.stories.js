import React from 'react';
import NotFound from './NotFound';
import "./../scss/404.scss";

/**
 * This file is consumed by storybook (dev dependency) to render individual components. 
 * This was used for accessibility and unit testing purposes and can be deleted if there is no need of storybook.
 *
 */


export default {
    component: NotFound,
    title: 'NotFound'
};

export const Default = () => (
    <NotFound />
);