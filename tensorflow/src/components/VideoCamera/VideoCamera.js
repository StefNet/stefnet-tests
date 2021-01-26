import { useEffect } from "react";
import PropTypes from "prop-types";
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

VideoCamera.defaultProps = {
  constraints: null,
};

VideoCamera.propTypes = {
  /** Media constraints object */
  constraints: PropTypes.shape({}),
  /** Ref to the video element */
  videoRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default VideoCamera;
