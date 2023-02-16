import React from "react";
import "./VideoItem.css";
const VideoItems = ({ video, onVideoSelect }) => {
  return (
    <div onClick={()=>onVideoSelect(video)} className="video-item item">
      <img
        alt="youtube Img"
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content" style={{textAlign:"right",fontFamily:'IranianSans'}}>
        <div style={{fontFamily:'IranianSans'}} className="header font title">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItems;
