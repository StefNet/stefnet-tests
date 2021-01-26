import { useRef, useState, useCallback } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import { clearCanvas, stopMediaStream, drawEmoticons } from "./utils";

import "./App.css";
import VideoCamera from "./components/VideoCamera/VideoCamera";

// TODOS
// - Use native camera resolution as input resolution for posenet
// - Only show switch camera button if there are multiple cameras

// App consts
const REFRESH_RATE = 500;
const INPUT_RESOLUTION = { width: 640, height: 480 };
const SCALE = 0.8;
const EMOTICONS = {
  nose: "🔔",
  leftEye: "❤️",
  rightEye: "❤️",
  leftEar: "💡",
  rightEar: "💡",
};

function App() {
  const [facingMode, setFacingMode] = useState("user");
  const webcamEl = useRef(null);
  const canvasEl = useRef(null);

  const handleCameraClick = useCallback(() => {
    stopMediaStream(canvasEl.current.srcObject);
    clearCanvas(canvasEl.current);
    setFacingMode(facingMode === "environment" ? "user" : "environment");
  }, [facingMode]);

  const detectPose = async (posenet_model) => {
    if (webcamEl.current !== null && webcamEl.current.readyState === 4) {
      const camera = webcamEl.current;
      const videoWidth = webcamEl.current.videoWidth;
      const videoHeight = webcamEl.current.videoHeight;

      webcamEl.current.width = videoWidth;
      webcamEl.current.height = videoHeight;

      // Get pose and detect body parts using the posenet model
      const posenet = await posenet_model.estimateSinglePose(camera);
      drawEmoticons(
        posenet,
        camera,
        videoWidth,
        videoHeight,
        canvasEl,
        EMOTICONS
      );
    }
  };

  const initPoseNet = async () => {
    const model = await posenet.load({
      inputResolution: INPUT_RESOLUTION,
      scale: SCALE,
    });

    setInterval(() => {
      detectPose(model);
    }, REFRESH_RATE);
  };

  initPoseNet();

  return (
    <div className="App">
      <div className="video-container">
        <VideoCamera
          videoRef={webcamEl}
          constraints={{
            video: {
              facingMode,
            },
          }}
        />
        <canvas ref={canvasEl} />
        <button onClick={handleCameraClick}>Flip cameras</button>
      </div>
    </div>
  );
}

export default App;
