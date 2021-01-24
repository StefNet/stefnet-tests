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
    ctx.beginPath();
    ctx.arc(x * scale, y * scale, 3, 0, 2 * Math.PI);
    ctx.fillText(keypoint.emoticon, x, y);
  }
}

/**
 * Return filtered bodyparts
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
  return {
    audio: false,
    video: camera ? { deviceId: { exact: camera } } : true,
  };
}
