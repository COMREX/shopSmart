import React, { useState, useEffect, useRef } from "react";
import { BarcodeWrapper, Heading } from "./barcodeScanner.styles";
import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library";
import QRCode from "../../Assets/images/QRcode.svg";

const BarcodeScanner = ({ onScan }) => {
  const videoRef = useRef(null);
  const codeReader = useRef(new BrowserMultiFormatReader());

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

  return (
    <BarcodeWrapper>
      <Heading>Scan Barcode and QR Code</Heading>
      <video
        ref={videoRef}
        id="video"
        style={{ width: "100%", height: "auto" }}
      />
    </BarcodeWrapper>
  );
};

export default BarcodeScanner;
