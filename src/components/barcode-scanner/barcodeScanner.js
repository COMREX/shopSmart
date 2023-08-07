import React, { useState, useEffect, useRef } from "react";
import { BarcodeWrapper, Heading } from "./barcodeScanner.styles";
import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library";
import QRCode from "../../Assets/images/QRcode.svg";

const BarcodeScanner = ({ onScan }) => {
  const videoRef = useRef(null);
  const codeReader = useRef(new BrowserMultiFormatReader());
  const [videoPlaying, setVideoPlaying] = useState(true);

  useEffect(() => {
    const startScanning = async () => {
      if (videoRef.current) {
        try {
          const hints = new Map();
          const formats = [
            "code_128",
            "code_39",
            "code_93",
            "codabar",
            "ean_8",
            "ean_13",
            "upc_a",
            "upc_e",
            "upc_ean",
            "qr_code",
          ];
          hints.set(4, formats);
          await codeReader.current.decodeFromVideoDevice(
            undefined,
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
