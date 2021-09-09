import Axios from "axios";

/**
 * This is an async function using Axios library for fetching the items from API 
 * based on limits passed through parameters.
 *
 * @param type
 * @param start
 * @param limit
 * @returns data
 */
export async function GetItems(type, start, limit) {
    let response = await Axios.get(
        `https://hacker-news.firebaseio.com/v0/${type}.json?print=pretty`
    ).catch((err) => {
        alert("Something went wrong. Please try again later");
    });
    limit =
        response.data.length - start > limit
            ? limit
            : response.data.length - start;
    return response.data.splice(start, limit);
}


/**
 * This is an async function using Axios library to get total number of items from API.
 *
 * @param type
 * @returns data.length
 */
export async function GetTotalNumber(type) {
    let response = await Axios.get(
        `https://hacker-news.firebaseio.com/v0/${type}.json?print=pretty`
    ).catch((err) => {
        alert("Something went wrong. Please try again later");
    });
    return response.data.length;
}


/**
 * This is an async function using Axios library to get item details using the id.
 *
 * @param id
 * @returns data
 */
export async function GetItemDetails(id) {
    let response = await Axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    ).catch((err) => {
        alert("Something went wrong. Please try again later");
    });
    return response.data;
}
