import React, { useEffect, useState } from "react";
import { GetItems, GetItemDetails } from "./Repository";
import "./scss/Items.scss";
import { Dropdown, DropdownButton } from "react-bootstrap";
import {
    sortByMostPoints,
    sortByLeastPoints,
    sortByLeastComments,
    sortByMostComments,
} from "./utils";
import PartialStory from "./Components/Common/PartialStory";

/**
 * This component is used to render fifty stories in a sorted format along with a dropdown menu 
 * to choose the basis of sorting over the rendered stories. 
 * Sorting can be done on basis of time created, comments and points.
 *
 * @component SortedItems
 * @prop Type
 * @prop Title
 */

const MAX_PAGE_LIMIT = 50;
const SortedItems = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [completedPercentage, setCompletedPercentage] = useState(0);
    const [dropdownTitle, setDropdownTitle] = useState("Latest");

    useEffect(() => {
        document.title = `Hacker News | ${props.title}`;
        setIsLoading(true);

        GetItems(props.type, 0, MAX_PAGE_LIMIT).then(async (data) => {
            let sortedData = [];
            for (let i = 0; i < data.length; i++) {
                setCompletedPercentage(Math.floor((i * 100) / MAX_PAGE_LIMIT));
                let currentItem = await GetItemDetails(data[i]);
                if (currentItem && currentItem.id) {
                    sortedData.push(currentItem);
                }
            }

            switch (dropdownTitle) {
                case "Oldest": {
                    sortedData.reverse();
                    break;
                }
                case "Most Points": {
                    sortedData.sort(sortByMostPoints);
                    break;
                }
                case "Least Points": {
                    sortedData.sort(sortByLeastPoints);
                    break;
                }
                case "Most Comments": {
                    sortedData.sort(sortByMostComments);
                    break;
                }
                case "Least Comments": {
                    sortedData.sort(sortByLeastComments);
                    break;
                }
                default:
            }

            setIsLoading(false);
            setCompletedPercentage(0);
            setData(sortedData);
        });
    }, [dropdownTitle, props.type, props.title]);

    return (
        <div className="Container">
            <div className="Sub-Container">
                <DropdownButton
                    id="dropdown-basic-button"
                    data-testid="dropdown"
                    title={dropdownTitle}
                    disabled={isLoading}
                >
                    <Dropdown.Item style={{ color: "#4D4D4D" }} onSelect={() => setDropdownTitle("Latest")}>
                        Latest
                    </Dropdown.Item>
                    <Dropdown.Item style={{ color: "#4D4D4D" }} onSelect={() => setDropdownTitle("Oldest")}>
                        Oldest
                    </Dropdown.Item>
                    <Dropdown.Item style={{ color: "#4D4D4D" }} onSelect={() => setDropdownTitle("Most Points")}>
                        Most Points
                    </Dropdown.Item>
                    <Dropdown.Item style={{ color: "#4D4D4D" }} onSelect={() => setDropdownTitle("Least Points")} >
                        Least Points
                    </Dropdown.Item>
                    <Dropdown.Item style={{ color: "#4D4D4D" }} onSelect={() => setDropdownTitle("Most Comments")}>
                        Most Comments
                    </Dropdown.Item>
                    <Dropdown.Item style={{ color: "#4D4D4D" }} onSelect={() => setDropdownTitle("Least Comments")}>
                        Least Comments
                    </Dropdown.Item>
                </DropdownButton>
                {isLoading ? (
                    <div
                        className="Skeleton-Container"
                        data-testid="percentage-loader"
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <h1>{completedPercentage} %</h1>
                        </div>
                    </div>
                ) : (
                    <div data-testid="story-holder">
                        {data.map((story) => (
                            <PartialStory story={story} key={story.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SortedItems;
