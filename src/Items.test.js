import React from 'react';
import Items from './Items';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Items', () => {

    describe('render', () => {

        it('should return a container which is a DOM element for Item', () => {
            const { container } = render(
                <Router>
                    <Route>
                        <Items type="newstories" title="New" />
                    </Route>
                </Router>
            );
            expect(container).toBeDefined();
        });

        it('should show skeleton as soon as Items are rendered and wait for twenty stories to show up.', async () => {
            const { getByTestId } = render(
                <Router>
                    <Route>
                        <Items type="newstories" title="New" />
                    </Route>
                </Router>
            );
            const skeleton = getByTestId("skeleton-holder");
            expect(skeleton).toBeTruthy();
            await waitFor(() => {
                const storyHolder = getByTestId("story-holder");
                expect(storyHolder).toBeTruthy();
                const paginationHolder = getByTestId("pagination-holder");
                expect(paginationHolder).toBeTruthy();
                expect(storyHolder.childElementCount).toBe(20);
            }, { timeout: 5000 });
        });

        it('should have no accessibility violations whenever there is a change to Items Component', async () => {
            const { container } = render(
                <Router>
                    <Route>
                        <Items type="newstories" title="New" />
                    </Route>
                </Router>
            );

            const results = await axe(container);
            expect(results).toBeTruthy();
            expect(results).toHaveNoViolations();
        });
    });
});