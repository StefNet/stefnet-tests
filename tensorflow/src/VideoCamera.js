import { useEffect, useState } from "react";

// function stopAndRemoveTrack(mediaStream) {
//   return function (track) {
//     track.stop();
//     mediaStream.removeTrack(track);
//   };
// }

// function stopMediaStream(mediaStream) {
//   if (!mediaStream) {
//     return;
//   }

//   mediaStream.getTracks().forEach(stopAndRemoveTrack(mediaStream));
// }

function useUserMedia(constraints) {
  const [stream, setStream] = useState();
  const [error, setError] = useState();
  const [state, setState] = useState("pending");
  console.log("constraints", constraints);
  useEffect(() => {
    let canceled = false;
    setState("pending");
    navigator.mediaDevices.getUserMedia(constraints).then(
      (stream) => {
        if (!canceled) {
          setState("resolved");
          setStream(stream);
        }
      },
      (error) => {
        if (!canceled) {
          setState("rejected");
          setError(error);
        }
      }
    );

    return () => {
      canceled = true;
    };
  }, [constraints]);

  // useEffect(() => () => stopMediaStream(stream), [stream]);

  return { error, state, stream };
}

function VideoCamera({ videoRef, constraints }) {
  const { error, state, stream } = useUserMedia(constraints);

  useEffect(() => {
    if (state !== "resolved" || !stream) {
      return;
    }

    const video = videoRef.current;

    video.srcObject = stream;
    video.setAttribute("playsinline", true);
    video.setAttribute("autoplay", true);
    video.play();
  }, [state, stream, videoRef]);

  if (state === "pending") {
    return <p>{"Waiting..."}</p>;
  }

  if (state === "rejected") {
    return (
      <p>
        {"Error: "}
        {error.message}
      </p>
    );
  }

  return (
    <>
      <video ref={videoRef} />
    </>
  );
}

export default VideoCamera;
