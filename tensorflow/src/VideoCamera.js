import { useEffect, useState } from "react";

import { getConstraints } from "./utils";

function VideoCamera({ videoRef }) {
  const [cameras, setCameras] = useState([]);
  const [activeCamera, setActiveCamera] = useState("");

  const handleCameraChange = (e) => {
    setActiveCamera(e.target.value);
  };

  useEffect(() => {
    // Gets all available devices
    navigator.mediaDevices
      .enumerateDevices()
      // Filter devices on video input only
      .then((devices) =>
        devices.filter((device) => device.kind === "videoinput")
      )
      // Store available cameras in state
      .then((cameras) => setCameras(cameras))
      .catch((error) => {
        console.log(error);
      });

    navigator.mediaDevices
      .getUserMedia(getConstraints(activeCamera))
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      });
  }, [videoRef, activeCamera]);

  return (
    <>
      <form>
        {cameras.length && (
          <select onChange={handleCameraChange}>
            {cameras.map((camera) => (
              <option key={camera.deviceId} value={camera.deviceId}>
                {camera.label}
              </option>
            ))}
          </select>
        )}
      </form>
      <video ref={videoRef} />
    </>
  );
}

export default VideoCamera;
