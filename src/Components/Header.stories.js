import React from 'react';
import Header from './Header';
import "./../scss/Header.scss";

/**
 * This file is consumed by storybook (dev dependency) to render individual components. 
 * This was used for accessibility and unit testing purposes and can be deleted if there is no need of storybook.
 *
 */


export default {
    component: Header,
    title: 'Header'
};

export const Default = () => (
    <Header />
);