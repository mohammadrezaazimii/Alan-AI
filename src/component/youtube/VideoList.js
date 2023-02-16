// import React from "react";
import VideoItems from "./VideoItems";
const VideoList = ({ videos ,onVideoSelect}) => {
    const renderedList =videos.map((video) => {
       return(<VideoItems onVideoSelect={onVideoSelect}  video={video} key={video.id.videoId} />)
    });
return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default VideoList;
