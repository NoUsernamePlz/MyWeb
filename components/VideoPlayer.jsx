
import React, { useState } from "react";

const VideoPlayer = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = ['https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4',
  'https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4',
  'https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4'
  ]

  const handleEnded = () => {
    setCurrentVideoIndex((currentIndex) =>
      currentIndex === videos.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <video
      src={videos[currentVideoIndex]}
      onEnded={handleEnded}
      autoPlay
      muted
      className='object-cover h-4/6 w-5/6 rounded-3xl '
    />
  );
};

export default VideoPlayer;

