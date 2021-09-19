import React, { useEffect, useState } from "react";
import Pagination from "./Components/Pagination";
import { GetItems, GetTotalNumber } from "./Repository";
import Skeleton from "react-loading-skeleton";
import Story from "./Components/Story";
import { getAllQueryParams } from "./utils";
import "./scss/Items.scss";

/**
 * This creates a DOM holder for all the stories and pagination component 
 * and initialize the components: Pagination and Story
 *
 * @calls Pagination
 * @calls Story
 * @prop title
 * @prop type
 */


const MAX_PAGE_LIMIT = 20;
const Items = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalItems, setTotalItems] = useState(500);
    const [pageNumber, setPageNumber] = useState(
        getAllQueryParams().page ? parseInt(getAllQueryParams().page) : 0
    );

    useEffect(() => {
        document.title = `Hacker News | ${props.title}`;
        setIsLoading(true);
        GetTotalNumber(props.type).then((total) => {
            setTotalItems(total);
        });

        GetItems(props.type, pageNumber * MAX_PAGE_LIMIT, MAX_PAGE_LIMIT).then(
            (data) => {
                setData(data);
                setIsLoading(false);
            }
        );
    }, [pageNumber, props.type, props.title]);

    return (
        <div
            className="Container"
        >
            <div
                className="Sub-Container"
            >
                {isLoading ? (
                    <div className="Skeleton-Container" data-testid="skeleton-holder">
                        <Skeleton count={20} height={75} />
                    </div>
                ) : (
                    <div data-testid="story-holder">
                        {data.map((id) => (
                            <Story id={id} key={id} />
                        ))}
                    </div>
                )}
                <div data-testid="pagination-holder">
                    <Pagination
                        pageNumber={pageNumber}
                        setPageNumber={setPageNumber}
                        maxPageNumber={Math.floor(totalItems / MAX_PAGE_LIMIT)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Items;
