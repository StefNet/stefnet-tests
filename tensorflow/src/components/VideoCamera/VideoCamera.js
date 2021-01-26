import { useEffect } from "react";
import useUserMedia from "./useUserMedia";

function VideoCamera({ videoRef, constraints }) {
  const { error, status, stream } = useUserMedia(constraints);

  useEffect(() => {
    if (status !== "resolved" || !stream) {
      return;
    }

    const video = videoRef.current;
    video.srcObject = stream;

    // Required for IOS
    video.setAttribute("playsinline", true);
    video.setAttribute("autoplay", true);

    video.play();
  }, [stream]);

  if (status === "pending") {
    return <p>{"Loading..."}</p>;
  }

  if (status === "error") {
    return <p>{error.message}</p>;
  }

  return <video ref={videoRef} />;
}

export default VideoCamera;
