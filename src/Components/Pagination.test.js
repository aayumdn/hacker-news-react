import React from 'react';
import Pagination from './Pagination';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Pagination', () => {

    describe('render', () => {

        it('should return a container which is a DOM element for Pagination Component', () => {
            const { container } = render(
                <Router>
                    <Route>
                        <Pagination pageNumber='0' setPageNumber={() => { }} maxPageNumber='3' />
                    </Route>
                </Router>
            );
            expect(container).toBeDefined();
        });

        it('should show with a Next link when application is first rendered', () => {
            const { getByTestId } = render(
                <Router>
                    <Route>
                        <Pagination pageNumber='0' setPageNumber={() => { }} maxPageNumber='3' />
                    </Route>
                </Router>
            );
            const paginate = getByTestId('pagination');
            expect(paginate).toBeTruthy();
            expect(paginate.textContent).toContain('Next');
            expect(paginate.textContent).not.toContain('Prev');
        });

        it('should show with a Next & Prev link when pages are navigated and current page is not the first or last page', () => {
            const { getByTestId } = render(
                <Router>
                    <Route>
                        <Pagination pageNumber='2' setPageNumber={() => { }} maxPageNumber='4' />
                    </Route>
                </Router>
            );
            const paginate = getByTestId('pagination');
            expect(paginate).toBeTruthy();
            expect(paginate.textContent).toContain('Next');
            expect(paginate.textContent).toContain('Prev');
        });

        it('should show with a Prev link when application reaches the last page', () => {
            const { getByTestId } = render(
                <Router>
                    <Route>
                        <Pagination pageNumber='3' setPageNumber={() => { }} maxPageNumber='3' />
                    </Route>
                </Router>
            );
            const paginate = getByTestId('pagination');
            expect(paginate).toBeTruthy();
            expect(paginate.textContent).toContain('Prev');
            expect(paginate.textContent).not.toContain('Next');
        });

        it('should have no accessibility violations whenever there is a change to Pagination Component', async () => {
            const { container } = render(
                <Router>
                    <Route>
                        <Pagination pageNumber='3' setPageNumber={() => { }} maxPageNumber='3' />
                    </Route>
                </Router>
            );

            const results = await axe(container);
            expect(results).toBeTruthy();
            expect(results).toHaveNoViolations();
        });
    });
});

