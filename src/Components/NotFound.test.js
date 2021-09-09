import React from 'react';
import NotFound from './NotFound';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('NotFound', () => {

    describe('render', () => {

        it('should return a container which is a DOM element for NotFound component', () => {
            const { container } = render(
                <NotFound />
            );
            expect(container).toBeDefined();
        });

        it('should have text displaying 404 page not found', () => {
            const { getByTestId } = render(
                <NotFound />
            );

            const errorCode = getByTestId('error-code');
            const notFoundMessage = getByTestId('error-message');

            expect(errorCode).toHaveTextContent("404");
            expect(notFoundMessage).toHaveTextContent("PAGE NOT FOUND");
        });

        it('should have no accessibility violations whenever there is a change to NotFound component', async () => {
            const { container } = render(
                <NotFound />
            );

            const results = await axe(container);
            expect(results).toBeTruthy()
            expect(results).toHaveNoViolations();
        });
    });
})

