import { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import { getFilteredBodyparts, drawTextPoints } from "./utils";

import "./App.css";
import VideoCamera from "./VideoCamera";

// Settings for emoticons
const bodyPartsEmoticons = {
  nose: "👀",
  leftEye: "💩",
  rightEye: "💩",
  // leftEar: "",
  // rightEar: "",
  // leftShoulder: "",
  // rightShoulder: "",
  // leftElbow: "",
  // rightElbow: "",
  // leftWrist: "",
  // rightWrist: "",
  // leftHip: "",
  // rightHip: "",
  // leftKnee: "",
  // rightKnee: "",
  // leftAnkle: "",
  // rightAnkle: "",
};

const drawEmoticons = (pose, video, videoWidth, videoHeight, canvas) => {
  const ctx = canvas.current.getContext("2d");
  const filteredResult = getFilteredBodyparts(
    pose.keypoints,
    bodyPartsEmoticons
  );

  canvas.current.width = videoWidth;
  canvas.current.height = videoHeight;

  drawTextPoints(filteredResult, 0.9, ctx, 1);
};

function App() {
  const webcamEl = useRef(null);
  const canvasEl = useRef(null);

  const detectPose = async (posenet_model) => {
    if (webcamEl.current !== null && webcamEl.current.readyState === 4) {
      const camera = webcamEl.current;
      const videoWidth = webcamEl.current.videoWidth;
      const videoHeight = webcamEl.current.videoHeight;

      webcamEl.current.width = videoWidth;
      webcamEl.current.height = videoHeight;

      // Get pose and detect body parts using the posenet model
      const posenet = await posenet_model.estimateSinglePose(camera);
      drawEmoticons(posenet, camera, videoWidth, videoHeight, canvasEl);
    }
  };

  const initPoseNet = async () => {
    const model = await posenet.load({
      inputResolution: { width: 640, height: 480 },
      scale: 0.8,
    });

    setInterval(() => {
      detectPose(model);
    }, 5000);
  };

  initPoseNet();

  return (
    <div className="App">
      <VideoCamera videoRef={webcamEl} />
      <canvas ref={canvasEl} />
    </div>
  );
}

export default App;
