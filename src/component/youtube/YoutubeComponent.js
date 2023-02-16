/** @format */
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "../../font/IranianSans.ttf";

const YoutubeComponent = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async (term) => {
    console.log("term: ", term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    console.log("From the App!", video);
    setSelectedVideo(video);
  };
  return (
    <div className="ui container font">
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default YoutubeComponent;
