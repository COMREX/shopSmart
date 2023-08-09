import React, { useState, useEffect, useRef } from "react";
import { BarcodeWrapper, Heading } from "./barcodeScanner.styles";
import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library";
import QRCode from "../../Assets/images/QRcode.svg";

const BarcodeScanner = ({ onScan }) => {
  const videoRef = useRef(null);
  const codeReader = useRef(new BrowserMultiFormatReader());
  const [videoPlaying, setVideoPlaying] = useState(true);

  const startScanning = async () => {
    if (videoRef.current) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment", // This ensures rear camera on mobiles.
            focusMode: "continuous", // Enables continuous auto-focus.
          },
        });

        videoRef.current.srcObject = stream; // Attach stream to video element.

        await codeReader.current.decodeFromStream(
          stream,
          videoRef.current,
          (result, error) => {
            if (result) {
              onScan(result.text);
            }
            if (error && !(error instanceof NotFoundException)) {
              console.error("Error decoding barcode:", error);
            }
          }
        );
      } catch (error) {
        console.error("Error starting scanning:", error);
      }
    }
  };

  const stopScanning = () => {
    codeReader.current.reset();
  };

  useEffect(() => {
    startScanning();

    return () => {
      stopScanning();
    };
  }, [onScan]);

  const handleVideoClick = () => {
    if (videoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setVideoPlaying((prev) => !prev);
  };

  return (
    <BarcodeWrapper>
      <Heading>Scan Barcode and QR Code</Heading>
      <video
        ref={videoRef}
        id="barcode-scanner-video"
        style={{
          width: "250px",
          height: "189px",
          border: "2px solid #06919A",
          marginBottom: "20px",
        }}
        onClick={handleVideoClick} // Add click event to pause/play the video
      />
    </BarcodeWrapper>
  );
};

export default BarcodeScanner;
