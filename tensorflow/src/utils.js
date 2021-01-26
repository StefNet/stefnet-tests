/**
 * Draw pose keypoints onto a canvas
 */
export function drawTextPoints(keypoints, minConfidence, ctx, scale = 1) {
  ctx.font = "16px Arial";
  ctx.textAlign = "center";

  for (let i = 0; i < keypoints.length; i++) {
    const keypoint = keypoints[i];

    if (keypoint.score < minConfidence) {
      continue;
    }

    const { y, x } = keypoint.position;

    // Draws the text/emoticons on the keypoints
    drawEmoticon(ctx, x, y, scale, keypoint.emoticon);
  }
}

function drawEmoticon(ctx, x, y, scale, emoticon) {
  // Draws the text/emoticons on the keypoints
  ctx.beginPath();
  ctx.arc(x * scale, y * scale, 3, 0, 2 * Math.PI);
  ctx.fillText(emoticon, x, y);
}

export function drawEmoticons(
  pose,
  video,
  videoWidth,
  videoHeight,
  canvas,
  emoticons
) {
  const ctx = canvas.current.getContext("2d");
  const filteredResult = getFilteredBodyparts(pose.keypoints, emoticons);

  canvas.current.width = videoWidth;
  canvas.current.height = videoHeight;

  drawTextPoints(filteredResult, 0.9, ctx, 1);
}

/**
 * Clears the canvas
 */
export function clearCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Get filtered bodyparts
 */
export const getFilteredBodyparts = (keypoints, bodyparts) =>
  keypoints.reduce((filtered, option) => {
    if (Object.keys(bodyparts).includes(option.part)) {
      filtered.push({
        ...option,
        emoticon: bodyparts[option.part],
      });
    }
    return filtered;
  }, []);

/**
 * Sets active camera contraints
 * @todo create seperate fuctions for updating camera and getting contraints
 */
export function getConstraints(camera) {
  if (camera) {
    return {
      audio: false,
      video: camera,
    };
  }

  return {
    audio: false,
    video: {
      facingMode: "user",
    },
  };
}

// taken from https://github.com/bsonntag/stop-media-stream/blob/main/index.js
function stopAndRemoveTrack(mediaStream) {
  return function (track) {
    track.stop();
    mediaStream.removeTrack(track);
  };
}

export function stopMediaStream(mediaStream) {
  if (!mediaStream) {
    return;
  }

  mediaStream.getTracks().forEach(stopAndRemoveTrack(mediaStream));
}
