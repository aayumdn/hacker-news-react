import React from 'react';
import Story from './Story';
import { render, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Story', () => {

    describe('render', () => {

        it('should return a container which is a DOM element for Story Component', () => {
            const { container } = render(
                <Story id="8863" key="8863" />
            );
            expect(container).toBeDefined();
        });
    });


    describe('Integration test', () => {
        it('should render a Story having story text, points, time, detail and comments if it is not a job', async () => {
            const { getByTestId } = render(
                <Story id="8863" key="8863" />
            );
            await waitFor(() => {
                const headline = getByTestId("text-holder");
                expect(headline).toBeTruthy();
                expect(headline.textContent).toContain("My YC app: Dropbox - Throw away your USB drive(getdropbox.com)");
                const info = getByTestId("info-holder");
                expect(info.childElementCount).toBe(4);
                const points = getByTestId("point-holder");
                expect(points).toBeTruthy();
                expect(points.textContent).toContain("points");
                const time = getByTestId("time-holder");
                expect(time).toBeTruthy();
                expect(time.textContent).toContain("day(s) ago");
                const detail = getByTestId("detail-holder");
                expect(detail).toBeTruthy();
                expect(detail.textContent).toContain("dhouston");
                const comments = getByTestId("comment-holder");
                expect(comments).toBeTruthy();
                expect(comments.textContent).toContain("comments");
            }, { timeout: 5000 });
        });

        it('should render Job having job text, time and detail but no comments and points', async () => {
            const { getByTestId } = render(
                <Story id="192327" />
            );
            await waitFor(() => {
                const headline = getByTestId("text-holder");
                expect(headline).toBeTruthy();
                expect(headline.textContent).toContain("Justin.tv is looking for a Lead Flash Engineer!");
                const info = getByTestId("info-holder");
                expect(info.childElementCount).toBe(2);
                const time = getByTestId("time-holder");
                expect(time).toBeTruthy();
                expect(time.textContent).toContain("day(s) ago");
                const detail = getByTestId("detail-holder");
                expect(detail).toBeTruthy();
                expect(detail.textContent).toContain("justin");
            }, { timeout: 5000 });
        });

        it('should have no accessibility violations whenever there is a change to Story Component', async () => {
            const { container } = render(
                <Story id="8863" key="8863" />
            );

            const results = await axe(container);
            expect(results).toBeTruthy();
            expect(results).toHaveNoViolations();
        });

    });
});