import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Header', () => {

    describe('render', () => {

        it('should return a container which is a DOM element for Header Component', () => {
            const { container } = render(
                <Header />
            );
            expect(container).toBeDefined();
        });

        it('should have navbrand and navlinks along with hrefs to navigate', () => {
            const { getByTestId } = render(
                <Header />
            );
            const home = getByTestId('hn-navbrand');
            const New = getByTestId('new-navlink');
            const best = getByTestId('best-navlink');
            const ask = getByTestId('ask-navlink');
            const show = getByTestId('show-navlink');
            const jobs = getByTestId('jobs-navlink');
            const sorted = getByTestId('sorted-navlink');


            expect(home).toHaveTextContent("HACKER NEWS");
            expect(New).toHaveTextContent("NEW");
            expect(best).toHaveTextContent("BEST");
            expect(ask).toHaveTextContent("ASK");
            expect(show).toHaveTextContent("SHOW");
            expect(jobs).toHaveTextContent("JOBS");
            expect(sorted).toHaveTextContent("SORTED");


            expect(home).toHaveAttribute('href', '/');
            expect(New).toHaveAttribute('href', '/new');
            expect(best).toHaveAttribute('href', '/best');
            expect(ask).toHaveAttribute('href', '/ask');
            expect(show).toHaveAttribute('href', '/show');
            expect(jobs).toHaveAttribute('href', '/jobs');
            expect(sorted).toHaveAttribute('href', '/sorted-stories');
        });

        it('should have no accessibility violations whenever there is a change to Header Component', async () => {
            const { container } = render(
                <Header />
            );

            const results = await axe(container);
            expect(results).toBeTruthy()
            expect(results).toHaveNoViolations();
        });
    });
})

