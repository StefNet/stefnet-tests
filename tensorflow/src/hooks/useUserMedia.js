import { useEffect, useState } from "react";

export default function useUserMedia(constraints) {
  const [stream, setStream] = useState();
  const [error, setError] = useState();
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    let canceled = false;
    setStatus("pending");
    navigator.mediaDevices.getUserMedia(constraints).then(
      (stream) => {
        if (!canceled) {
          setStatus("resolved");
          setStream(stream);
        }
      },
      (error) => {
        if (!canceled) {
          setStatus("rejected");
          setError(error);
        }
      }
    );

    return () => {
      canceled = true;
    };
  }, [constraints]);

  return { error, status, stream };
}
