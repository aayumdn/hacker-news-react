import React from "react";
import { BiError } from "react-icons/bi";
import "./../scss/404.scss";


/**
 * This component is used to render the 404 Not Found page in case there is a href typo from the user.
 *
 * @component NotFound
 */

const NotFound = () => {
    return (
        <div
            className="Not-Found-Container"
        >
            <div
                className="Pagination-Container"
            >
                <BiError className="Not-Found-Heading" />
                <div className="Not-Found-Heading mx-4" data-testid="error-code">
                    404
                </div>
            </div>
            <div className="Not-Found-SubHeading" data-testid="error-message">PAGE NOT FOUND</div>
        </div>
    );
};

export default NotFound;
