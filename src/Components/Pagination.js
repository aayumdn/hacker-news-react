import React from "react";
import { Link } from "react-router-dom";
import "./../scss/Pagination.scss";


/**
 * This component is used to render the pagination for webpage.
 * When the current page number is less that total pages available but greater than 0,
 * this component renders link to previous and next pages. 
 * 
 * When the current page number is 0, that is the first page
 * this component renders link to next page.
 *
 * When the current page number is equal to maximum number of pages,
 * this component renders link to previous page.
 * 
 * @component Pagination
 * @prop pageNumber
 * @prop setPageNumber
 * @prop maxPageNumber
 */

const Pagination = ({ pageNumber, setPageNumber, maxPageNumber }) => {
    return (
        <div className="my-2 Pagination-Container" data-testid="pagination">
            {pageNumber > 0 && (
                <Link
                    onClick={() => setPageNumber(pageNumber - 1)}
                    to={{
                        search: `page=${pageNumber - 1}`,
                    }}
                    className="mx-2 Previous-Container"
                >
                    Prev
                </Link>
            )}
            {pageNumber < maxPageNumber && (
                <Link
                    onClick={() => setPageNumber(pageNumber + 1)}
                    to={{
                        search: `page=${pageNumber + 1}`,
                    }}
                    className="mx-2 Next-Container"
                >
                    Next
                </Link>
            )}
        </div>
    );
};

export default Pagination;
