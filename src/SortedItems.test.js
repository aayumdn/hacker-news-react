import React from 'react';
import SortedItems from './SortedItems';
import { render, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

jest.setTimeout(30000);

describe('SortedItems', () => {

    describe('render', () => {

        it('should return a container which is a DOM element for SortedItems', () => {
            const { container } = render(
                <SortedItems type="newstories" title="New" />
            );
            expect(container).toBeDefined();
        });

        it('should show percentage loader as soon as SortedItems component is rendered and wait for fifty stories to show up.', async () => {
            const { getByTestId } = render(
                <SortedItems type="newstories" title="New" />
            );
            const dropDown = getByTestId("dropdown");
            expect(dropDown).toBeTruthy();
            expect(dropDown.textContent).toContain("Latest");
            const percentageLoader = getByTestId("percentage-loader");
            expect(percentageLoader).toBeTruthy();
            await waitFor(() => {
                const storyHolder = getByTestId("story-holder");
                expect(storyHolder).toBeTruthy();
                expect(storyHolder.childElementCount).toBe(50);
            }, { timeout: 29000 });
        });

        it('should have no accessibility violations whenever there is a change to SortedItems Component', async () => {
            const { container } = render(
                <SortedItems type="newstories" title="New" />
            );
            const results = await axe(container);
            expect(results).toBeTruthy();
            expect(results).toHaveNoViolations();
        });
    });
});