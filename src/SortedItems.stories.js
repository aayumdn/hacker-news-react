import React from 'react';
import SortedItems from './SortedItems';

/**
 * This file is consumed by storybook (dev dependency) to render individual components. 
 * This was used for accessibility and unit testing purposes and can be deleted if there is no need of storybook.
 *
 */


export default {
    component: SortedItems,
    title: 'SortedItems'
};

export const Default = () => (
    <SortedItems type="newstories" title="Sorted"/>
);