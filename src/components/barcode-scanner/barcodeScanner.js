import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library";

const videoConstraints = {
  facingMode: "environment", // Use the rear camera (for mobile devices)
};

const Scanner = ({ onScan }) => {
  const webcamRef = useRef(null);
  const [scanning, setScanning] = useState(false);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    const codeReader = new BrowserMultiFormatReader();
    try {
      const result = await codeReader.decodeFromImageUrl(imageSrc);
      if (result) {
        onScan(result.text);
        setScanning(false);
      }
    } catch (error) {
      if (!(error instanceof NotFoundException)) {
        console.error(error);
      }
      // For NotFoundException, you might not need to do anything since it just means no barcode/QR was detected.
    }
  };

  return (
    <div>
      <Webcam
        audio={false}
        height={300}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={300}
        videoConstraints={videoConstraints}
        onUserMedia={() => setScanning(true)}
      />
      {scanning && setInterval(capture, 1000)}
    </div>
  );
};

export default Scanner;
