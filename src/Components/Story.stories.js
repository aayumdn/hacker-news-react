import React from 'react';
import Story from './Story';
import "./../scss/Story.scss";

/**
 * This file is consumed by storybook (dev dependency) to render individual components. 
 * This was used for accessibility and unit testing purposes and can be deleted if there is no need of storybook.
 *
 */


export default {
    component: Story,
    title: 'Story'
};

export const Default = () => (
    <Story id="8863" key="8863" />
);