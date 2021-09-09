import React from 'react';
import PartialStory from './PartialStory';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const story = {
    "by": "dhouston",
    "descendants": 71,
    "id": 8863,
    "kids": [8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876],
    "score": 111,
    "time": 1175714200,
    "title": "My YC app: Dropbox - Throw away your USB drive",
    "type": "story",
    "url": "http://www.getdropbox.com/u/2/screencast.html"
};

const job = {
    "by": "justin",
    "id": 192327,
    "score": 6,
    "text": "Justin.tv is the biggest live video site online. We serve hundreds of thousands of video streams a day, and have supported up to 50k live concurrent viewers. Our site is growing every week, and we just added a 10 gbps line to our colo. Our unique visitors are up 900% since January.<p>There are a lot of pieces that fit together to make Justin.tv work: our video cluster, IRC server, our web app, and our monitoring and search services, to name a few. A lot of our website is dependent on Flash, and we're looking for talented Flash Engineers who know AS2 and AS3 very well who want to be leaders in the development of our Flash.<p>Responsibilities<p><pre><code>    * Contribute to product design and implementation discussions\n    * Implement projects from the idea phase to production\n    * Test and iterate code before and after production release \n</code></pre>\nQualifications<p><pre><code>    * You should know AS2, AS3, and maybe a little be of Flex.\n    * Experience building web applications.\n    * A strong desire to work on website with passionate users and ideas for how to improve it.\n    * Experience hacking video streams, python, Twisted or rails all a plus.\n</code></pre>\nWhile we're growing rapidly, Justin.tv is still a small, technology focused company, built by hackers for hackers. Seven of our ten person team are engineers or designers. We believe in rapid development, and push out new code releases every week. We're based in a beautiful office in the SOMA district of SF, one block from the caltrain station. If you want a fun job hacking on code that will touch a lot of people, JTV is for you.<p>Note: You must be physically present in SF to work for JTV. Completing the technical problem at <a href=\"http://www.justin.tv/problems/bml\" rel=\"nofollow\">http://www.justin.tv/problems/bml</a> will go a long way with us. Cheers!",
    "time": 1210981217,
    "title": "Justin.tv is looking for a Lead Flash Engineer!",
    "type": "job",
    "url": ""
};

describe('PartialStory', () => {

    describe('render', () => {

        it('should return a container which is a DOM element for PartialStory Component', () => {
            const { container } = render(
                <PartialStory story={story} />
            );
            expect(container).toBeDefined();
        });

        it('should render a Story having story text, points, time, detail and comments if it is not a job', () => {
            const { getByTestId } = render(
                <PartialStory story={story} />
            );
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
        });

        it('should render a Job having job text, time and detail but no comments and points', () => {
            const { getByTestId } = render(
                <PartialStory story={job} />
            );
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
        });

        it('should have no accessibility violations whenever there is a change to PartialStory Component', async () => {
            const { container } = render(
                <PartialStory story={story} />
            );
            const results = await axe(container);
            expect(results).toBeTruthy();
            expect(results).toHaveNoViolations();
        });
    });




});