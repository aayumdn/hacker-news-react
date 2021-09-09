import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { GetItemDetails } from "../Repository";
import "./../scss/Story.scss";
import PartialStory from "./Common/PartialStory";

/**
 * This component is used to render unordered stories in a paginated manner. It shows a skeleton at the time data is being fetched. 
 *
 * @component Story
 * @prop id
 * @calls PartialStory
 */

const Story = ({ id }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [story, setStory] = useState(null);

    useEffect(() => {
        GetItemDetails(id).then((data) => {
            setStory(data);
            setIsLoading(false);
        });
    }, [id]);

    return (
        <>
            {isLoading ? (
                <div className="Skeleton-Container">
                    <Skeleton height={75} />
                </div>
            ) : (
                <PartialStory story={story} />
            )}
        </>
    );
};

export default Story;
