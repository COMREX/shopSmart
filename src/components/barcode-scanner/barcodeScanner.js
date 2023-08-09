import React, { useState, useEffect, useRef } from "react";
import { BarcodeWrapper, Heading } from "./barcodeScanner.styles";
import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library";
import QRCode from "../../Assets/images/QRcode.svg";

const BarcodeScanner = ({ onScan }) => {
  const videoRef = useRef(null);
  const codeReader = useRef(new BrowserMultiFormatReader());
  const [videoPlaying, setVideoPlaying] = useState(true);

  const getMainCameraId = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(
      (device) => device.kind === "videoinput"
    );

    // Log devices for debugging
    console.log(videoDevices);

    return videoDevices[0]?.deviceId; // Assumes the first camera is the main one.
  };

  const startScanning = async () => {
    if (videoRef.current) {
      try {
        const mainCameraId = await getMainCameraId();

        const stream = await navigator.mediaDevices
          .getUserMedia({
            video: {
              deviceId: mainCameraId,
              focusMode: "continuous",
            },
          })
          .catch((error) => {
            console.error("Error accessing the camera:", error);
          });

        if (stream) {
          videoRef.current.srcObject = stream;

          await codeReader.current.decodeFromStream(
            stream,
            videoRef.current,
            (result, error) => {
              if (result) {
                console.log("Scanning result:", result.text); // Log the scan result
                onScan(result.text);
              }
              if (error && !(error instanceof NotFoundException)) {
                console.error("Error decoding barcode:", error);
              }
            }
          );
        }
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
        autoplay
        playsInline
        muted
        id="barcode-scanner-video"
        style={{
          width: "250px",
          height: "189px",
          border: "2px solid #06919A",
          marginBottom: "20px",
        }}
        onClick={handleVideoClick}
      />
    </BarcodeWrapper>
  );
};

export default BarcodeScanner;
