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

    drawEmoticon(ctx, x, y, scale, keypoint.emoticon);
  }
}

/**
 * Draws the text/emoticon on the keypoints
 */
function drawEmoticon(ctx, x, y, scale, emoticon) {
  ctx.beginPath();
  ctx.arc(x * scale, y * scale, 3, 0, 2 * Math.PI);
  ctx.fillText(emoticon, x, y);
}

/**
 * Draws emoticons on the canvas
 */
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
 * Returns merged and filtered array of keypoints/bodyparts
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
