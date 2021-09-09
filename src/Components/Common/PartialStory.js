import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { BiCommentDetail, BiGame, BiNews } from "react-icons/bi";
import { getTimeString } from "./../../utils";
import "./../../scss/Story.scss";

/**
 * This component is used to render the stories which could be job or news.
 * If it is a job type story, information consists of time and detail only.
 * If it is a news type story, information consists of points, comments, time and detail.
 * This creates 50 stories when called via SortedItems component and 20 stories 
 * when called via Story component.
 *
 * @component PartialStory
 * @prop story
 */

const PartialStory = ({ story }) => {
    return (
        <div id={story.id} className="my-3 mx-2 Story-Card">
            {story.type === "job" ? (
                <MdWork size={32} className="mx-2" />
            ) : (
                <BiNews size={32} className="mx-2" />
            )}
            <div className="Right-Container">
                <div className="Title-Container" data-testid="text-holder">
                    <a href={story.url ? story.url : ""} className="Title">
                        {story.title}
                    </a>
                    {story.url && (
                        <div className="mx-2 Title-URL">
                            ({new URL(story.url).host.replace("www.", "")})
                        </div>
                    )}
                </div>
                <div className="my-2 Detail-Container" data-testid="info-holder">
                    {story.type !== "job" && (
                        <div className="Detail-Subcontainer" data-testid="point-holder">
                            <BiGame className="Detail-Icon" />
                            <div className="mx-2 Detail-Text">
                                {story.score} points
                            </div>
                        </div>
                    )}
                    <div className="Detail-Subcontainer" data-testid="time-holder" >
                        <AiFillClockCircle className="Detail-Icon" />
                        <div className="mx-2 Detail-Text">
                            {getTimeString(story.time)}
                        </div>
                    </div>
                    <div className="Detail-Subcontainer" data-testid="detail-holder">
                        <BsFillPersonFill className="Detail-Icon" />
                        <div className="mx-2 Detail-Text">{story.by}</div>
                    </div>
                    {story.type !== "job" && (
                        <div className="Detail-Subcontainer" data-testid="comment-holder" >
                            <BiCommentDetail className="Detail-Icon" />
                            <div className="mx-2 Detail-Text">
                                {story.descendants} comments
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PartialStory;
