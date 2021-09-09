/**
 * This function is used to support Pagination by decoding URI for page number and checks if page is available.
 * For decoding, regex has been used
 *
 * @returns urlParams
 */

export function getAllQueryParams() {
    let match,
        pl = /\+/g, // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) {
            return decodeURIComponent(s.replace(pl, " "));
        },
        query = window.location.search.substring(1);
    let urlParams = {};
    while ((match = search.exec(query))) {
        if (decode(match[1]) in urlParams) {
            if (!Array.isArray(urlParams[decode(match[1])])) {
                urlParams[decode(match[1])] = [urlParams[decode(match[1])]];
            }
            urlParams[decode(match[1])].push(decode(match[2]));
        } else {
            urlParams[decode(match[1])] = decode(match[2]);
        }
    }
    return urlParams;
}

/**
 * This function is used to convert the timestamp fetched from API to a string time 
 * represented in second/minutes/hours.
 * 
 * @param postTime
 * @returns String
 * 
 */

export function getTimeString(postTime) {
    let seconds = Math.floor(new Date().getTime() / 1000 - postTime);
    let mins = Math.floor(seconds / 60);
    let hours = Math.floor(mins / 60);
    let days = Math.floor(hours / 24);
    if (days > 0) {
        return `${days} day(s) ago`;
    }

    if (hours > 0) {
        return `${hours} hours ago`;
    }

    if (mins > 0) {
        return `${mins} mins ago`;
    }

    if (seconds > 0) {
        return `${seconds} sec ago`;
    }
}


/**
 * This function is used to sort the stories based on most number of points. Two stories are passed as parameter into the function.
 * 
 * @param a
 * @param b
 */
export function sortByMostPoints(a, b) {
    if (a.score < b.score) {
        return 1;
    }
    if (a.score > b.score) {
        return -1;
    }
    return 0;
}


/**
 * This function is used to sort the stories based on least number of points. Two stories are passed as parameter into the function.
 * 
 * @param a
 * @param b
 */
export function sortByLeastPoints(a, b) {
    if (a.score < b.score) {
        return -1;
    }
    if (a.score > b.score) {
        return 1;
    }
    return 0;
}


/**
 * This function is used to sort the stories based on most number of comments. Two stories are passed as parameter into the function.
 * 
 * @param a
 * @param b
 */
export function sortByMostComments(a, b) {
    if (a.descendants < b.descendants) {
        return 1;
    }
    if (a.descendants > b.descendants) {
        return -1;
    }
    return 0;
}


/**
 * This function is used to sort the stories based on least number of comments. Two stories are passed as parameter into the function.
 * 
 * @param a
 * @param b
 */
export function sortByLeastComments(a, b) {
    if (a.descendants < b.descendants) {
        return -1;
    }
    if (a.descendants > b.descendants) {
        return 1;
    }
    return 0;
}
