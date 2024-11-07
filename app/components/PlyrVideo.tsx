"use client";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const PlyrVideo = () => {
  return (
    <Plyr
      source={{
        type: "video",
        title: "",
        poster: "",
        sources: [
          {
            src: "https://mtn-cms.s3.us-east-1.amazonaws.com/videosFree/estrogym+ad+1.mp4",
            type: "video/mp4",
            size: 576,
          },
        ],
      }}
    />
  );
};
export default PlyrVideo;
