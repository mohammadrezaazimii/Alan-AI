import React from "react";
import './VideoDetail.css';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const VideoDetail = ({ video }) => {
  if (!video)
    return (
      <Box className="circular-progress" sx={{ display: "flex", alignItem:''}}>
        <CircularProgress />
      </Box>
    );

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="Video Player" src={videoSrc} />
      </div>
      <div className="ui segment" style={{ textAlign: "right" }}>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
